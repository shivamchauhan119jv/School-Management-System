const express = require("express");
const adminRouter = express.Router();


adminRouter.post("/",(req,res)=>{
    try{
        res.status(201).json({
            status: "Success",
            data:"Admin has been registered"
        });
    }catch(error){
        res.json({
            status: "Failed",
            error: error.message,
        })
    }
})


module.exports = adminRouter;