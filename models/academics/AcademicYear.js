const mongoose = require("mongoose");
const academicYearSchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
        fromYear:{type:Date,required:true},
        toYear:{type:Date,required:true},
        iscurrent:{type:Boolean,required:false},
        createdBy:{type:mongoose.Schema.Types.ObjectId,ref:"Admin",required:true},
        students:[{type:mongoose.Schema.Types.ObjectId,ref:"Student",required:true}],
        teachers:[{type:mongoose.Schema.Types.ObjectId,ref:"Teacher"}]
    },
    {timestamps:true}
);
const AcademicYear = mongoose.model("AcademicYear", academicYearSchema);
module.exports = AcademicYear;