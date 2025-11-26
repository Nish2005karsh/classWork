const express=require('express');
// import express from express;
const cors=require('cors');

const app=express();
app.use(cors());
const PORT=3000
app.get('/hi',(req,res)=>{
    res.send("Haloo from me");
})
app.get('/bye',(req,res)=>{
    res.send("<h1>Bye</h1>bye from me ");
})
app.get('/contact',(req,res)=>{
    res.send("<h1>Contact</h1>")
})

app.get('/about',(req,res)=>{
    const students=[
        {
            id:1,
            name:"John",
            class:10
        },
        {
            id:2,
            name:"Jackson",
            class:11
        },
        {
            id:3,
            name:"China",
            class:12
        },]
        res.json(students)
})
    
app.listen(PORT,()=>{
    console.log(`server running at localhost:${PORT}`)
    console.log("Hello");
})





