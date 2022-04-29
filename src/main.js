const http = require('http');
const server = http.createServer(function (request, response) {
  response.write('hello_');
  response.end();
});
server.listen(3000, function () {
  console.log('服务已启动');
})