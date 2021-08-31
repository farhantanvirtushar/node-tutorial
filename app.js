const http = require("http");

const server = http.createServer((request, response) => {
  if ((request.url == "/") | (request.url == "/home")) {
    response.write("Home");
    response.end();
  } else {
    // response.write(`Opps </br> <a href ='/'> Back Home </a>`);
    response.end(`Opps </br> <a href ='/'> Back Home </a>`);
  }
});

server.listen(5000);
console.log(server);
