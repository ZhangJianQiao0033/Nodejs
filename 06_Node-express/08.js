const express = require('express')


const app = express()

app.use(express.json())

app.post('/login', (req, res, next) => {
    console.log(req.body);
})

app.listen(8000, () => {
  console.log('启动成功');
})