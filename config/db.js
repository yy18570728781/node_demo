const mongoose = require("mongoose");

const db = mongoose.createConnection("mongodb://localhost:27017/parking");

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("mongodb连接成功");
});

module.exports = db;
