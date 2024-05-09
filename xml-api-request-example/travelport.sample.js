// Import the required modules using ES6 import syntax
import axios from 'axios';
import { parseStringPromise } from 'xml2js';
import fs from 'fs';
import xmlFormatter from 'xml-formatter';

const API_KEY = "";

// Function to pretty-print XML
function printXML(xmlString) {
    const formattedXml = xmlFormatter(xmlString, {
        indentation: '  ', // Two spaces
        collapseContent: true,
        lineSeparator: '\n'
    });
    return formattedXml;
}

async function fetchAndParseXML() {
    try {
        // Read XML data from a file
        let data = fs.readFileSync('./request.xml', 'utf8');

        // console.log(printXML(data));  // Print the formatted request XML

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://apac.universal-api.pp.travelport.com/B2BGateway/connect/uAPI/AirService',
            headers: {
                'Content-Type': 'application/xml',
                'Authorization': `Basic ${API_KEY}`  // Ensure you use a secure method to handle keys
            },
            data: data
        };

        const response = await axios.request(config);
        
        // Extract the XML string from the response data
        const xmlData = response.data;

        // Parse the XML string into a JavaScript object
        // const parsedData = await parseStringPromise(xmlData);

        // Output the parsed data (JavaScript object)
        // console.log(parsedData);

        // Output the formatted XML string of the response
        // console.log(printXML(xmlData));

        fs.writeFileSync('./response.xml', printXML(xmlData), 'utf-8');
    

    } catch (error) {
        console.error('Error fetching or parsing XML:', printXML(error?.response?.data || 'Error data not available'));
    }
}

// Call the async function
fetchAndParseXML();
