const fs = require('fs')

const content = '----hello world, my name is coderwhy1'

// 文件写入

fs.writeFile('./ccc.txt', content, {
  encoding: 'utf-8',
  flag: 'a+'
} ,(err) => {
  if(err) {
    console.log('文件吸入错误', err);
  } else {
    console.log('写入成功');
  }
})