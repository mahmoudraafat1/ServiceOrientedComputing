const express = require('express');
const router = express.Router();
const Book = require('../models/book');


// Route for Save a new Book
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
    const newBook = {
      name: req.body.name,
      author: req.body.author,
      publishYear: req.body.publishYear,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
    };

    const book = await Book.create(newBook);

    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for Get All Books from database
router.get("/", async (req, res) => {
  try {
    const book = await Book.find({});

    return res.status(200).json({
      count: book.length,
      data: book,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for Get One Book from database by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);

    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for Update a Book
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

    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.status(200).send({ message: 'Book updated successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for Delete a book
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.status(200).send({ message: 'Book deleted successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;