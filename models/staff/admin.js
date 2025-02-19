const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, default: "admin" },
    },
    {
        timestamps: true,
    }

);
 const Admin= mongoose.model("admin" , admin);

 module.exports = Admin