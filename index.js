const express=require("express");
const app=express();

app.get("/", (req,res)=>{
    res.status(200).json("Express on Vercel");
});

app.listen(3000,()=>console.log("Server ready on port 3000...."));

module.exports=app;