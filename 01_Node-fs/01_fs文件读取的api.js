const fs = require('fs')

// const res1 = fs.readFileSync('./aaa.txt', {
//   encoding: 'utf8'
// })

// console.log(res1);


// console.log("后续代码");

//2 异步
// fs.readFile('./aaa.txt', {
//   encoding: 'utf-8'
// },(err, data) => {
//   if(err) {
//     console.log("读取文件错误", err)
//     return
//   }
//   console.log("文件结果", data);
// })


// console.log("后续代码");

// 3 promise 异步

fs.promises.readFile('./aaa.txt', {
  encoding: 'utf-8'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
console.log("后续代码");