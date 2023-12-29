import express from 'express'
import http from 'http'
const app = express()
app.get('/test', (req, res) => {
  console.log('server receive ②')
  setTimeout(() => {
    res.send('continue next time')
  }, 5000)
})
app.listen(9090, () => {
  console.log('service ing')
})

//模仿浏览器向本地服务器发送请求
setTimeout(() => {
  const func = () => {
    console.log('request start ①')
    http.get('http://127.0.0.1:9090/test', (res) => {
      res.on('data', (chunk) => {
        console.log('client receive ✅③')
        func()
      })
    })
  }
  func()
}, 1000)
