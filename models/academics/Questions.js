const mongoose = require("mongoose");
const { Schema } = mongoose
const questionSchema = new Schema(
    {
        question: { type: String, required: true },
        optionA: { type: String, required: true },
        optionB: { type: String, required: true },
        optionC: { type: String, required: true },
        optionD: { type: String, required: true },
        correctAnswer: { type: String, required: true },
        isCorrect: { type: Boolean, required: false },
        createdBy: { type: Schema.Types.ObjectId, ref: "Teacher", required: false },
    },
    { timestamps: true }
);
const QuestionSchema = mongoose.model("questionSchema", questionSchema);
module.exports = QuestionSchema;