const express = require("express");
const server = express();

server.get('/demo',(req,res)=>{
    res.send("hi")
})



server.listen(8000,()=>{
    console.log("Server is Working")

})