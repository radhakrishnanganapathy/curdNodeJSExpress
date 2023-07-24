const { default: mongoose } = require("mongoose");
const mongodb = require("mongoose");
const db_url = "mongodb://localhost:27017/curd";

mongoose.connect(db_url);
const con = mongoose.connection;

con.on("open", function () {
  console.log("db connected...");
});
