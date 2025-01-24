const express=require("express");
const { Getdata, Postdata, Deletedata, Updatedata } = require("../controller/controller");


const dataroute=express.Router()
dataroute.get("/",Getdata);
dataroute.post("/postdata",Postdata);
dataroute.delete("/delete/:id",Deletedata)
dataroute.patch("/update/:id",Updatedata)
module.exports=dataroute;


