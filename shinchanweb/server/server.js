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

// Updated endpoint for a single query
app.post('/search', (req, res) => {
  const searchTerm = req.body.query; // Extract the search term from the request body
  console.log('Search Term:', searchTerm); // Log the search term for debugging

  async function sendESRequest() {
    try {
      const body = await client.search({
        index: 'shinchandata', // Elasticsearch index
        body: {
          query: {
            bool: {
              should: [
                {
                  query_string: {
                    query: `${searchTerm}*`, // Use wildcard for partial matching
                    fields: ['Name^2'], // Boost the name field
                  },
                },
                {
                  query_string: {
                    query: `${searchTerm}*`, // Use wildcard for partial matching
                    fields: ['Biography'],
                  },
                },
              ],
            },
          },
          size: 100, // Limit the number of results; adjust as needed
        },
      });
  
      console.log('Search Results:', body.hits.hits); // Log the resulting JSON to the console
      return res.json(body.hits.hits); // Send results as JSON response
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
