import express from 'express'
import http from 'http'
const app = express()
app.get('/test',(req,res)=>{
    //这里便可向远端服务器发送请求，避免跨域
    res.send('hello')
})
app.listen(9090,()=>{
    console.log('service ing')
})

//模仿浏览器向本地服务器发送请求
setTimeout(()=>{
    http.get('http://127.0.0.1:9090/test',(res) => {
        res.on('data',(chunk) => {
            console.log(chunk)
        })
    })
},5000)