const mongoose = require("mongoose");

const UserCreate = new mongoose.Schema({
  username: { type: String },
  age: { type: Number },
});

const CreateCrud = new mongoose.Schema({
  name: { type: String },
  age: { type: Number },
  dob: { type: Date, default: Date.now },
  place: { type: String },
  mobile: { type: Number },
});

const user = mongoose.model("user", UserCreate);
const curd = mongoose.model("curd", CreateCrud);

module.exports = { user, curd };
