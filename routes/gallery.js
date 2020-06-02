const express = require("express");
const router = express.Router();
const Gallery = require("../models/Gallery");

//Get all galleries
router.get("/", async ({ query }, res) => {
  try {
    let queryParams = { _id: 0 };
    let limit = query.limit ? Number(query.limit) : 10;
    if (query.meta_info) {
      queryParams = { title: 1, desc: 1, slug: 1, category: 1, _id: 0 };
    }
    const galleries = await Gallery.find({}, queryParams).limit(limit);
    res.send(galleries);
  } catch (err) {
    res.send({ message: err });
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
    ...req.body,
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
