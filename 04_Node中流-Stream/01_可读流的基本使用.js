const fs = require('fs')

// fs.readFile('./aaa.txt', (err, data) => {
//   console.log(data.toString());
// })


const readStream = fs.createReadStream('./aaa.txt', {
  start: 8,
  end: 20,
  highWaterMark: 3
})

readStream.on('data', (data) => {
  console.log(data.toString());
})