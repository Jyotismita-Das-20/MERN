// Core Module
const http = require('http');
//External Module
const express = require('express');

const app = express();

//First Middleware
app.use((req, res, next) => {
  console.log('First Middleware',req.url, req.method);
  next(); // Pass control to the next middleware
});

app.use((req, res, next) => {
  console.log('Second Middleware',req.url, req.method);
  next(); // Pass control to the next middleware
});



// Local Module
const {handler} = require('./RequestHandler');

const server = http.createServer(app);
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});