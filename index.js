
const express = require('express');
const cors=require("cors");
const apiData =require('../model.json');
const app =express();
app.use(cors());
const port=process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("hello");
});

app.get("/api/",(req,res)=>{
    res.send(apiData);
})
app.listen(port,()=>{
        console.log("i am live");
});