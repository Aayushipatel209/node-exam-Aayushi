const mongooes=require("mongoose");
const connection=mongooes.connect("mongodb://127.0.0.1:27017/todolist_exam");
module.exports=connection;