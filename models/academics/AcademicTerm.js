const mongoose = require("mongoose");
const { Schema } = mongoose;
const academicTermSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        duration: { type: String, required: true , default:"3 Months" },
        createdBy: { type: Schema.Types.ObjectID, ref: "Admin", required: true },

        
        
    },
    { timestamps: true }
);
const AcademicTerm = mongoose.model("AcademicTerm", academicTermSchema);
module.exports = AcademicTerm;