const userModel=require("../models/usermodel")
const bcrypt=require("bcrypt")

async function onsignup(req,res){

    try{

    const {username,Password,email}=req.body();
    const userexist=await userModel.findOne(email);
    if(userexist){
        res.json({
            message:"user found"
        })
    }else{
        res.status(404).json({
            message: "user not found"
        })
    }
      
    const hashedpassword=await bcrypt(Password,10);
    const user=userModel.create({
        username,
        Password:hashedpassword,
        email
    })

    }catch(error){
        
   res.status(500).json({
    message:"internal error"
   })

    }
    
}