//in server/elasticsearch/client.js
const { Client } = require('@elastic/elasticsearch');
const config = require('config');

const elasticConfig = config.get('elastic');

const client = new Client({
  cloud: {
    id: elasticConfig.cloudID,
  },
  auth: {
    apiKey: elasticConfig.apiKey
  },
});

client.ping()
  .then(response => console.log("You are connected to Elasticsearch!"))
  .catch(error => {
    console.error("Elasticsearch is not connected.");
    
    if (error.meta) {
      console.error("Status Code:", error.meta.statusCode);
      console.error("Error Type:", error.body?.error?.type);
      console.error("Error Reason:", error.body?.error?.reason);
    } else {
      console.error("Error Message:", error.message);
    }
    
    console.error("Stack Trace:", error.stack); // Optional: Logs stack trace for deeper troubleshooting
  });

module.exports = client; 