const mongoose = require("mongoose");
const { Schema } = mongoose
const examResultSchema = new Schema(
    {
        student: { type: Schema.Types.ObjectId, ref: "Student", required: true },
        exam: { type: Schema.Types.ObjectId, ref: "Exam", required: true },
        grade: { type: Number, required: true },
        score: { type: Number, required: true },
        passMark: { type: Number, required: true, default: 50 },
        status: { type: String, required: true, enum: ["Excellent", "Good", "Poor"], default: "poor" },
        remarks: { type: String, required: false },
        position: { type: Number, required: false },
        subject: { type: mongoose.Schema.Types.ObjectId,ref:"Subject", required: false },
        classLevel: { type: mongoose.Schema.Types.ObjectId,ref:"ClassLevel", required: false },
        academicTerm: { type: mongoose.Schema.Types.ObjectId,ref:"AcademicTerm", required: false },
        academicYear: { type: mongoose.Schema.Types.ObjectId,ref:"AcademicYear", required: false },
        isPublished: { type: Boolean, default:false },

    },
    { timestamps: true }
);
const ExamResultSchema = mongoose.model("examResultSchema", examResultSchema);
module.exports = ExamResultSchema;