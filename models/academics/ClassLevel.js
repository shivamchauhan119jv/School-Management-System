const mongoose = require("mongoose");
const { Schema } = mongoose;
const classlevelSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        createdBy: { type: mongoose.Schema.Types.ObjectID, ref: "AcademicTerm", required: true },
        students: { type: Schema.Types.ObjectID, ref: "Student" },

        subjects: [{ type: Schema.Types.ObjectID, ref: "Subject", required: true }],
        
        teachers: [{ type: Schema.Types.ObjectID, ref:"Teacher" }],
    },
    {timestamps : true}
);
const ClassLevel = mongoose.model("ClassLevel" , classlevelSchema);
module.exports = ClassLevel;