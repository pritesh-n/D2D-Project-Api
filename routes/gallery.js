const express = require("express");
const router = express.Router();
const Gallery = require("../models/Gallery");

//Get all galleries
router.get("/", async (req, res) => {
  try {
    let query = { _id: 0 };
    if (req.query.meta_info) {
      query = { title: 1, desc: 1, img_url: 1, slug: 1, tags: 1, _id: 0 };
    }
    const galleries = await Gallery.find({}, query);
    res.json(galleries);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get specific gallery using slug

router.get("/:slug", async (req, res) => {
  try {
    const gallery = await Gallery.findOne(
      { slug: req.params.slug },
      { _id: 0, __v: 0 }
    );
    res.json(gallery);
  } catch (err) {
    res.json({ message: err });
  }
});

//Save a gallery
router.post("/", async (req, res) => {
  const gallery = new Gallery({
    ...req.body
  });
  try {
    const savedGallery = await gallery.save();
    res.json(savedGallery);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update a Gallery
// router.patch("/", async (req, res) => {
//   try {
//     const updatedPost = await Gallery.updateOne(
//       { slug: req.params.slug },
//       { $set: { ...req.body } }
//     );
//     res.json(updatedPost);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

module.exports = router;
