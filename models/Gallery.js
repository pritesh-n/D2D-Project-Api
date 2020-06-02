const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: String,
  content: String,
  image_credit: String,
  image_url: String,
});

const GallerySchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    default: "",
  },
  category: {
    type: String,
    required: true,
    default: "",
  },
  image_credits: {
    type: String,
    default: "credit",
  },
  type: {
    type: String,
    required: true,
  },
  posts: {
    type: [PostSchema],
  },
});

module.exports = mongoose.model("Gallery", GallerySchema, "Content");
