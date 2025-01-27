const http = require('http')

const server1 = http.createServer((req, res) => {
  res.end('2000回应')
})

server1.listen(2000,() => {
  console.log('2000端口启动成功');
})

const server2 = http.createServer((req, res) => {
  res.end('3000回应')
})

server2.listen(3000,() => {
  console.log('3000端口启动成功');
})