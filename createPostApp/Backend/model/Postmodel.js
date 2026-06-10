const mongoose=require('mongoose');

const Postschema=new mongoose.Schema({
    image:String,
    caption:String
})

const Postmodel=mongoose.model("post",Postschema);
module.exports=Postmodel;