const mongoose = require("mongoose");

const userschema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    img: {
      type: String,
    },

    username: {
      type: String,
      unique: true,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    provider: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userschema);
