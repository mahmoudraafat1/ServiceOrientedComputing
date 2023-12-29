const express = require('express');
const router = express.Router();
const Novel = require('../models/novel');


// Route for Save a new Novel
router.post("/", async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.author ||
      !req.body.publishYear ||
      !req.body.description ||
      !req.body.price ||
      !req.body.image
    ) {
      return res.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }
    const newnovel = {
      name: req.body.name,
      author: req.body.author,
      publishYear: req.body.publishYear,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
    };

    const novel = await Novel.create(newnovel);

    return res.status(201).send(novel);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for Get All novels from database
router.get("/", async (req, res) => {
  try {
    const novel = await Novel.find({});

    return res.status(200).json({
      count: novel.length,
      data: novel,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for Get One novel from database by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const novel = await Novel.findById(id);

    return res.status(200).json(novel);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for Update a novel
router.put("/:id", async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.author ||
      !req.body.publishYear ||
      !req.body.description ||
      !req.body.price ||
      !req.body.image
    ) {
      return res.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }

    const { id } = req.params;

    const result = await Novel.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: 'Novel not found' });
    }

    return res.status(200).send({ message: 'Novel updated successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for Delete a novel
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Novel.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: 'Novel not found' });
    }

    return res.status(200).send({ message: 'Novel deleted successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;