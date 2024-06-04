const jwt=require("jsonwebtoken");
const ErrorHandle =require("../Utils/ErrorHandle")
const User=require("../Models/userModel.js");
require("dotenv").config();




const VerifyToken= async(req,res,next)=>
{
   try {
      const token = req.cookies?.token || req.header("Authoriztion")?.replace("Bareer","")
      
          if(!token)
             throw new ErrorHandle("Authentication Failed","failed")

          const decode=jwt.verify(token,process.env.jwt_password);
          console.log(decode);
          
          const user=await User.findOne({"_id":decode.UserId}) 

          if(!user)
              throw new ErrorHandle("Invalid User","failed")

          
           req.user=user 
          next();

   } catch (error) {
       
    res.status(404).json({"status":error.status,
    "message":error.message
  })


   }
    
}

module.exports=VerifyToken;