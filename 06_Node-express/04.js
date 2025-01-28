const express = require('express')

const app = express()


app.use('/home', (req, res, next) => {
  
  res.end('home')
})

app.listen(8000, () => {
  console.log("启动");
})