const ajax = require('./ajax.js')

const res = ajax('/home/multidata')

res.then(res => {
  const {data} = res
  console.log(data);
}).catch(err => {
  console.log(err);
})