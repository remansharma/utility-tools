// Import Express
import express from 'express';

// Initialize the app
const app = express();
const port = 3000;

// Define a GET endpoint that returns an XML response
app.get('/api/endpoint', (req, res) => {
    // Sample XML response
    const xmlResponse = `
    <response>
        <status>success</status>
        <message>Hello, this is a sample XML response!</message>
        <data>
            <item id="1">Item 1</item>
            <item id="2">Item 2</item>
            <item id="3">Item 3</item>
        </data>
    </response>
    `;

    // Set the content type to XML and send the response
    res.set('Content-Type', 'application/xml');
    res.send(xmlResponse);
});

// Start the server
app.listen(port, () => {
    console.log(`Mock server listening at http://localhost:${port}`);
});
