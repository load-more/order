const axios = require('axios')

module.exports = function(url, type='get', params={}) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',  //http://123.207.32.32:8000 
    timeout: 5000
  })

  const res = instance({
    url
  })

  return res

  
  // instance.interceptors.request.use(config => {
  //   return config
  // }, err => {
  //   console.log(err);
  // })
  
  // instance.interceptors.response.use(res => {
  //   return res.data.data
  // }, err => {
  //   console.log(err);
  // })
  
  
  // res.then(l => {
  //   const {data} = l.data
  //   console.log(data);
  // })
}