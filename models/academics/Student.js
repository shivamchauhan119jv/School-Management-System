const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        studentId: {
            type: String, required: true, default: function () {
                return (
                    "STU" + Math.floor(100 + Math.random() * 900) + Date.now().toString().slice(2, 4) + this.name.splice(" ").map(name => name[0]).join("").toUpperCase()
                );
            }
        },
        isWitdrawn: { type: Boolean, default: false },
        role: { type: String, default: "student" },
        // subject: { type: mongoose.Schema.Types.ObjectId, ref: "Course", default: true },
        // applicationStatus: { type: String, enum: ["pending", "approved", "rejected"], default: pending },
        classLevels: { type: mongoose.Schema.Types.ObjectId, ref: "ClassLevel", default: true },
        currentClassLevel: {
            type: String, default: function () {
                return (this.classlevels[this.classLevels.length - 1])
            },
        },
        academicYear: { type: mongoose.Schema.Types.ObjectId, ref: "AcademicYear", default: true },
        dateAdmintted: [{ type: Date, default: Date.now }],
        examResults: [{ type: mongoose.Schema.Types.ObjectId, ref: "ExamplResult" }],
        program: [{ type: mongoose.Schema.Types.ObjectId, ref: "Program", required: true }],
        isPromotedToLevel200: [{ type: Boolean, default: false }],
        isPromotedToLevel300: [{ type: Boolean, default: false }],
        isPromotedToLevel400: [{ type: Boolean, default: false }],
        isGraduated: [{ type: Boolean, default: false }],
        isSuspended: [{ type: Boolean, default: false }],
        perfectName: { type: String },
        yearGraduated: { type: String },


    },
    { timestamps: true }
);
const StudentSchema = mongoose.model("studentSchema", studentSchema);
module.exports = StudentSchema;