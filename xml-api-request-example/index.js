// Import the required modules using ES6 import syntax
import axios from 'axios';
import { parseStringPromise } from 'xml2js';

async function fetchAndParseXML() {
    try {
        // Make a GET request to the URL that returns an XML response
        const response = await axios.get('http://localhost:3000/api/endpoint', {
            headers: {
                'Content-Type': 'application/xml',
                'Accept': 'application/xml'
            }
        });

        // Extract the XML string from the response data
        const xmlData = response.data;

        // Parse the XML string into a JavaScript object
        const parsedData = await parseStringPromise(xmlData);

        // Output the parsed data (JavaScript object)
        console.log(parsedData);
    } catch (error) {
        console.error('Error fetching or parsing XML:', error);
    }
}

// Call the async function
fetchAndParseXML();
