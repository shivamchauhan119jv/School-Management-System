const mongoose = require("mongoose");
const yeargroupSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        createdBy: { type: mongoose.Schema.Types.ObjectID, ref: "Admin", required: true },
        academicYear: { type: mongoose.Schema.Types.ObjectID, ref: "AcademicYear", required: true },
       

        
        
    },
    { timestamps: true }
);
const YearGroup = mongoose.model("yeargroupSchema", yeargroupSchema);
module.exports = YearGroup;