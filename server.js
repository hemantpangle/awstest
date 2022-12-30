const express = require('express')
const app = express()

app.get('/',(req,resp)=>{
    resp.sendFile('public/awsdocker.html',{root : __dirname})
});

app.listen(8081,'0.0.0.0',()=>{
    console.log("server started at port 8081")
})