const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    comments: [],
    tags: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
