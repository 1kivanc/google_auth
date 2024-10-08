const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  avatar: { type: String, default: "" },
});

module.exports = mongoose.model("User", UserSchema);
