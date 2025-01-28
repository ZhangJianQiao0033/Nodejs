const express = require('express')

const app = express()


app.use((req, res, next) => {
  console.log('use');
})


app.listen(8000, () => {
  console.log("启动");
})