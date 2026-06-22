const jwt=require("jsonwebtoken");


async function generateToken(id) {
    const token=jwt.sign({id},process.env.JWT_TOKEN,{expiresIn:"7d"})

return token;
} 

module.exports=generateToken;