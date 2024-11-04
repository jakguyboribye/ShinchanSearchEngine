const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { Client } = require('@elastic/elasticsearch');
const client = require('./elasticsearch/client');

const app = express();

app.use(cors());
app.use(express.json()); // To handle JSON requests

// Proxy endpoint for images
app.get('/proxy/image', async (req, res) => {
  const { url } = req.query; // Get the image URL from the query parameter

  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const contentType = response.headers['content-type'];

    res.set('Content-Type', contentType);
    res.send(response.data); // Send the image data back to the client
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).send('Error fetching image');
  }
});

function capitalizeFirstLetter(string) {
  if (!string) return ''; // Handle empty strings
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Updated endpoint for a single query
app.post('/search', async (req, res) => {
  let searchTerm = req.body.query; // Get the original search term
  const searchOption = req.body.option; // Get the selected search option
  searchTerm = capitalizeFirstLetter(searchTerm); // Capitalize the first letter
  console.log('Search Term:', searchTerm, 'Search Option:', searchOption); // Log for debugging

  async function sendESRequest() {
    try {
      let body;

      switch (searchOption) {
        case 'oneWord':
          // One Word Query: Exact match
          body = {
            query: {
              bool: {
                should: [
                  {
                    term: {
                      Name: searchTerm, // Exact match on Name field
                    }
                  },
                  {
                    match: {
                      Biography: searchTerm // Match in Biography
                    }
                  }
                ]
              }
            }
          };
          break;

        case 'multipleWords':
          // Multiple Word Query: Match all words
          body = {
            query: {
              multi_match: {
                query: searchTerm,
                fields: ['Name^3', 'Biography'],
                type: 'best_fields' // Match against both fields
              }
            }
          };
          break;

        case 'partialMatch':
          // Partial Match: Wildcard search
          body = {
            query: {
              bool: {
                should: [
                  {
                    query_string: {
                      query: `*${searchTerm}*`, // Partial match on Name
                      fields: ['Name'],
                      fuzziness: 'AUTO', // Fuzzy matching enabled
                      boost: 2.0 // Boost for Name matches
                    }
                  },
                  {
                    query_string: {
                      query: `*${searchTerm}*`, // Partial match on Biography
                      fields: ['Biography'],
                      fuzziness: 'AUTO', // Fuzzy matching enabled
                      boost: 1.0 // Normal weight for Biography
                    }
                  }
                ]
              }
            }
          };
          break;

        case 'ranking':
          // Ranking: Boosting matches for Name over Biography
          body = {
            query: {
              bool: {
                should: [
                  {
                    match: {
                      Name: {
                        query: searchTerm,
                        boost: 2 // Boost for name matches
                      }
                    }
                  },
                  {
                    match: {
                      Biography: searchTerm
                    }
                  }
                ]
              }
            }
          };
          break;

        default:
          return res.status(400).json({ error: 'Invalid search option' });
      }

      const response = await client.search({
        index: 'shinchanfinal', // Elasticsearch index
        body: {
          ...body,
          size: 5, // Limit the number of results; adjust as needed
        }
      });
  
      console.log('Search Results:', response.hits.hits); // Log the resulting JSON to the console
      return res.json(response.hits.hits); // Send results as JSON response
    } catch (error) {
      console.error('Elasticsearch request failed:', error);
      if (!res.headersSent) { // Check if response has already been sent
        return res.status(500).json({ error: 'Elasticsearch request failed' });
      }
    }
  }
  
  sendESRequest();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
