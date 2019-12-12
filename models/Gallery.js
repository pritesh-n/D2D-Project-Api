const mongoose = require("mongoose");

const SlideSchema = mongoose.Schema({
  title: String,
  desc: String,
  image_credit: String,
  img_url: String
});

const GallerySchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    default: ""
  },
  tags: {
    type: [String],
    default: []
  },
  img_url: {
    type: String,
    default: null
  },
  slides: {
    type: [SlideSchema],
    required: true
  }
});

module.exports = mongoose.model("Gallery", GallerySchema);
