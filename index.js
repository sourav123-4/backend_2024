
require('dotenv').config()
const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.get("/login",(req,res)=>{
    res.send("<h1>This is login api</h1>")
})

app.listen(process.env.PORT,()=>{
    console.log(`server started at port number ${process.env.PORT}`)
})