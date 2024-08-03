require("dotenv").config();
const http = require("http");
require("./config/dbConnect");
const app = require("./app/app");
const PORT = process.env.Port || 3000
const server = http.createServer(app)
server.listen(PORT,console.log(`Server is running on port ${PORT}`));
console.log("developed");