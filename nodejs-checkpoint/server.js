// Task 2: Create HTTP Server
// This server runs on port 3000 and responds with "Hello Node!!!!"

const http = require('http');

const hostname = 'localhost';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello Node!!!!</h1>\n');
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});