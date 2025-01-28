const express = require('express')

const app = express()

app.post('/login', (req, res) => {
  res.end('登陆成功,欢迎回来')
})

app.get('/home', (req, res) => {
  res.end('首页轮播图')
})

app.listen(8000, () => {
  console.log('express服务器启动成功');
})