const userModel = require("../models/usermodel");
const bcrypt = require("bcrypt");
const generateToken = require("../config/token");

async function onsignup(req, res) {
  try {
    const { username, email, password } = req.body;

    const userexist = await userModel.findOne({ email });

    if (userexist) {
     return  res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedpassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      username,
      email,
      password: hashedpassword,
    });

    const token = generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      message: "Signup successful",
      user: {
        username: user.username,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

async function onlogin(req,res){
  try{

  const {email,password}=req.body;
  const userexist=await userModel.findOne({email});
  if(!userexist){
    return res.status(404).json({
      message:"user not found"
    })
  }

const match =await bcrypt.compare(password,userexist.password);

if(!match){
return res.status(400).json({message: "password is incorrect"});
}

const token=generateToken(userexist._id);
res.cookie("token",token,{
  httpOnly:true,
  secure:process.env.NODE_ENV==="production",
  sameSite:"strict",
  maxAge:7*24*60*60*1000
})

return res.status(200).json({
  message:"login successfull",
  user:{
    username:userexist.username,
    email:userexist.email
  }
})

  }catch(error){
      console.log(error);

    return res.status(500).json({
      error
    })

  }
}

async function onlogout(req,res){
  try{
    res.clearCookie("token");
    res.status(200).json({message:"logout successfully"});
  }catch(error){
      console.log(error);

    res.status(500).json({
      message:error
    })
  }
}



module.exports = {onsignup,onlogin,onlogout};