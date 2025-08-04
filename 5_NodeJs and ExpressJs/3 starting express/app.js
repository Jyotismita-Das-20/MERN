// Core Module
const http = require('http');
//External Module
const express = require('express');

const app = express();

//First Middleware
app.use("/",(req, res, next) => {
  console.log('First Middleware',req.url, req.method);
  next(); // Pass control to the next middleware
});

app.use("/test",(req, res, next) => {
  console.log('Second Middleware',req.url, req.method);
  res.send('<h1>Start testing</h1>');
});



// Local Module
const {handler} = require('./RequestHandler');

const server = http.createServer(app);
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});