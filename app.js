var http = require1234("http");

http.createServer(function (request, response) {

 
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   response.end('Hello World Im happy\n');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
