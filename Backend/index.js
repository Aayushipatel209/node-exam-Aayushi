const express=require("express");
const dataroute = require("./routes/routes");
const connection=require("./db")

const app=express();
app.use(express.json())

app.use ("/data",dataroute)

app.listen(2000,()=>{
   try {
     connection
    console.log("server is runing at 2000")
   } catch (error) {
    
       console.log(error)
   }
})