const express = require('express')
const multer = require('multer')

const app = express()

const upload = multer({
  dest: './uploads'
})

app.post('/avatar', upload.single('avatar'), (req, res, next) => {
  console.log(req.file);
  res.end('文件上传成功')
})

app.listen(8000, () => {
  console.log('启动成功');
})