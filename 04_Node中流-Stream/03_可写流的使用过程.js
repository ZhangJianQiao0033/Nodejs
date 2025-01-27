const fs = require('fs')

// 1.一次性写入内容
// fs.writeFile('./bbb.txt', 'hello world', {
//   encoding: 'utf-8',
//   flag: 'a+'
// }, (err) => {
//   console.log('写入文件结果:', err)
// })


const writeSteam =fs.createWriteStream('./ccc.txt', {
  flags: 'a',
  start: 3
})

writeSteam.write('-zjjjq')
