const mongoose=require('mongoose');
const validator=require("validator")
const UserSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is Required"],
        unique:[true,"Username must be Unique"],

    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,"Email must be Unique"],
        validate: {
            validator: validator.isEmail,
            message: "Invalid email format"
          }
    },
    password:{
        type:String,
        required:[true,"Password is Required"],
        minlength:[6,"password length should be greater than 6"]
    }

});

const User=mongoose.model("users",UserSchema)

module.exports=User