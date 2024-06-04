const express=require("express");
const { LoginController, RegisterController, logutController } = require("../Controller/UserController");
const cookie=require("cookie-parser");
const { updateController, DeleteController } = require("../Controller/profileController");
const VerifyToken = require("../Middleware/VerifyToken");
const route=express.Router();



route.post('/login',LoginController)
route.post('/register',RegisterController)
route.get("/logout",VerifyToken,logutController)
route.post("/update",VerifyToken,updateController)
route.get("/delete",VerifyToken,DeleteController)
module.exports=route;