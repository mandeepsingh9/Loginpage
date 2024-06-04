const User=require("../Models/userModel.js");
const ErrorHandle=require("../Utils/ErrorHandle.js")
require("dotenv").config()
const Error=require("../Middleware/Error.js")
const bcrypt=require("bcrypt")

const jwt=require("jsonwebtoken");


const LoginController=async(req,res)=>
{
   
   try {
        let obj=req.body;
        
        let response=await User.findOne({username:obj.username})
        if(!response)
         {
            throw new ErrorHandle("User not Exits","failed")
         }
         
         const ischeckPass= await bcrypt.compare(obj.password,response.password)
        console.log(ischeckPass);
        if(!ischeckPass)
         {
            throw new ErrorHandle("Password do not Matched!","failed")
         } 
        console.log(response);

        //jwt token generate
        
         let Token=jwt.sign({"UserId":response._id}, process.env.jwt_password , {expiresIn: '1h'})
         

         res.cookie('token', Token, {httpOnly: true, secure: true, maxAge: 60 * 60 * 24 * 10 } ).status(201).json({
         "status":"sucess",
         "message":"Login Sucessfull",
         "Data":response
       });
   } catch (error) {
       res.status(404).json({"status":error.status,
         "message":error.message
       })
   }    

}


const RegisterController=async(req,res)=>
{
   
   try {
    let data=req.body;

      let encrypt=await bcrypt.hash(data.password,10)
      
      let obj={
         "username":data.username,
         "email":data.email,
         "password":encrypt
      }
    let newdata= await User.create(obj);
    res.status(201).json({
        "status":"sucess",
        "message":"Register Sucessfully",
        "Data":newdata
    });
   } catch (error) {
     Error(error,req,res);
   }
   
}

const logutController=async(req,res)=>{
try {
      
      
      res.clearCookie('token').status(200).json({
          "status":"sucess",
          "message":"Logout Sucessfully",});
} catch (error) {
   Error(error,req,res)
}
};


module.exports={LoginController,RegisterController,logutController}