const http = require("http");

const server = http.createServer((request, response) => {

  response.end('hello world')
});

server.listen(8000, () => {
  console.log("服务器开启成功");
});
