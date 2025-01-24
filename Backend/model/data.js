const mongooes=require("mongoose");
const datashema=new mongooes.Schema({
    title:String,
    Description:String
})

const datamodel=mongooes.model("tododata",datashema);

module.exports=datamodel