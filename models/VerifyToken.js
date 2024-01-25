const mongoose = require("mongoose");

// eslint-disable-next-line new-cap
const tokenSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  expireAt: {
    type: Date,
    required: true,
    default: Date.now() + 3600000, // token will be expired after one hour
  },
  type: {
    type: String,
    required: true,
  },
});

const Token = mongoose.model("Token", tokenSchema);
export default Token;
