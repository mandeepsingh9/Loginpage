const express=require('express')
require("dotenv").config();
const connect =require("./db.js");
const userRoute=require('./Routes/UserRoute.js')
const cookieParser=require("cookie-parser")
const cors=require("cors")
const app=express();

connect();



//middleware
app.use(cors({
  origin: "*", // ✅ sab allow ho jayega (web, mobile, postman, etc.)
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // ✅ allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // ✅ allowed headers
  credentials: true // ✅ cookies / auth headers allow
}));
app.use(cookieParser());
app.use(express.json());

app.use("/api",userRoute)
app.get("/",(req,res)=>{res.json({"status":"sucess"})});



const port=process.env.PORT || 8000;

 app.listen(port,()=>{
     console.log(`App is listening on Port ${port}`);
 })
