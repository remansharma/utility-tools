const http = require('http');
const fs = require('fs');
const path = require('path');

// Retrieve the file path from the command-line arguments
const args = process.argv.slice(2);
let filePath;

// Parse the command-line arguments
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--input' && i + 1 < args.length) {
    filePath = path.resolve(args[i + 1]);
  }
}

// Print the path of the file being served
console.log(`File to be served: ${filePath}`);

if (!filePath) {
  console.error('Please provide a file path using the --input flag.');
  process.exit(1);
}

const server = http.createServer((req, res) => {
  // Read the file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Handle file read error
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    } else {
      // Determine the content type based on the file extension
      const ext = path.extname(filePath).toLowerCase();
      let contentType = 'text/plain';

      switch (ext) {
        case '.html':
          contentType = 'text/html';
          break;
        case '.json':
          contentType = 'application/json';
          break;
        case '.js':
          contentType = 'application/javascript';
          break;
        case '.css':
          contentType = 'text/css';
          break;
        // Add more content types if needed
      }

      // Serve the file
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
