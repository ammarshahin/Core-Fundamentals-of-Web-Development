const http = require(`http`);

// create  server object
const server = http.createServer((req, res) => {
  // write response
  res.write(`HelloWorld!!!`);
  res.end();
});

server.listen(5000,() => console.log(`Server Listening`)); 


