const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const UserRoels = require("../../conf/UserRoles.json");

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, `Email address is required.`],
    validate: {
      validator: validator.isEmail,
      message: props => `'${props.value}' is not a valid email address!`
    }
  },
  password: { type: String, required: [true, "Password is required."] }
});

module.exports = User = mongoose.model("User", UserSchema);
