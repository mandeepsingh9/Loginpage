const ErrorHandle=require("../Utils/ErrorHandle.js")

const Error=(err,req,res)=>{

    let error={...err};
 
    if (err.name === 'CastError') {
        const message = `Resource not found. Invalid: ${err.path}`
        error = new ErrorHandle(message, "failed")
    }
   
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(value => value.message);
        error = new ErrorHandle(message, "failed")
    }

    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`
        error = new ErrorHandle(message, "failed")
    }
    
  
    res.status(404).json({
        "status": error.status || "failed",
        "message":error.message || "Internal server Error"
    })
}


module.exports=Error