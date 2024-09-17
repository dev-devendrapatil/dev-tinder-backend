const express = require("express")

const app = express()
app.use("/test",(req,res)=>{
    res.send("in test")
})
app.use("/",(req,res)=>{
    res.send("Hello World")
})
app.listen(4001,()=>console.log("Server is running on port 4001"))