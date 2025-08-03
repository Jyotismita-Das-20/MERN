const http = require('http');

console.log('Starting the server');

const requestHandler = (req, res) => {
  console.log('I was here in handler');
}
const server = http.createServer(requestHandler);
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${3001}`); 
});