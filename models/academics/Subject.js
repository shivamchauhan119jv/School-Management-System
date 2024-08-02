const mongoose = require("mongoose");
const { Schema } = mongoose;
const subjectSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        teacher: { type: Schema.Types.ObjectID, ref: "Teacher" },
        academicTerm: { type: Schema.Types.ObjectID, ref: "AcademicTerm", required: true },
        createdBy: { type: Schema.Types.ObjectID, ref: "AcademicTerm", required: true },
        duration: { type: String, required: true, default: "3 months" },
    },
    {timestamps : true}
);
const Subject = mongoose.model("subject" , subjectSchema);
module.exports = Subject;