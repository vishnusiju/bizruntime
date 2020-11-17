var express = require("express")
var app = express()
var http = require("http").createservaer(app)
var io = require(socket.io)(http)

app.get("/",(req,res)=>{
    res.sendfile(__dirname+"client.html");
})

app.get("/admin",(req,res)=>{
    res.sendfile(__dirname+"admin.html");
})

http.listen(3000, ()=>{
    console.log("connection to server")
})