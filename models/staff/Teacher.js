const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        dateEmployed: { type: Date, required: Date.now },
        teacherId: {
            type: String, required: true, default: function () {
                return (
                    "TEA" + Math.floor(100 + Math.random() * 900) + Date.now().toString().slice(2, 4) + this.name.splice(" ").map(name => name[0]).join("").toUpperCase()
                );
            }
        },
        isWitdrawn: { type: Boolean, default: false },
        isSuspended: { type: Boolean, default: false },
        role: { type: String, default: "teacher" },
        subject: { type: mongoose.Schema.Types.ObjectId, ref: "Course", default: true },
        applicationStatus: { type: String, enum: ["pending", "approved", "rejected"], default: pending },
        classLevel: { type: mongoose.Schema.Types.ObjectId, ref: "ClassLevel", default: true },
        academicYear: { type: mongoose.Schema.Types.ObjectId, ref: "AcademicYear", default: true },
        examsCreated: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exam", }],
        createdBy: { type: Schema.Types.ObjectId, ref: "Admin", default: true },
        academicTerm: { type: mongoose.Schema.Types.ObjectId, ref: "AcademicTerm", default: true },

    },
    { timestamps: true }
);
const TeacherSchema = mongoose.model("teacherSchema", teacherSchema);
module.exports = TeacherSchema;