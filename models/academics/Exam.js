const mongoose = require("mongoose");
const { Schema } = mongoose
const examSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        subject: { type: Schema.Types.ObjectId,ref:"Subject", required: true },
        pragram: { type: Schema.Types.ObjectId,ref:"Program", required: true },
        passMark: { type: Number, required: true , default:"50" },
        totalMark: { type: Number, required: true , default:"100" },
        academicTerm:{ type:Schema.Types.ObjectId,ref:"AcademicTerm",required:true}
      


    },
    { timestamps: true }
);
const StudentSchema = mongoose.model("studentSchema", studentSchema);
module.exports = StudentSchema;