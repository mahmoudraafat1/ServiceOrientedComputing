const express = require('express');
const router = express.Router();
const Review = require('../models/review');
const User = require('../models/user');
const Book = require('../models/book');

router.post('/add', async (req, res) => {

  const { userId, bookId, comment } = req.body;


  const newReview = new Review({
    user: userId,
    book: bookId,
    comment: comment,
  });


  newReview
    .save()
    .then((savedReview) => {
      console.log('Review saved:', savedReview);
      res.status(201).json(savedReview);
    })
    .catch((error) => {
      console.error('Error saving review:', error);
      res.status(500).json({ error: 'Error saving review' });
    });
});

//get all reviews for certain book by bookid 
router.get('/:bookId', async (req, res) => {
  const { userId } = req.params;
  try {
    const review = await Review.find().populate('user');

    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.json(review);
  } catch (error) {
    console.error('Error fetching review:', error);
    res.status(500).json({ error: 'Error fetching review' });
  }
});

//get review for a certain book and user
router.get('/:userId/:bookId', async (req, res) => {
  const { userId, bookId } = req.params;
  try {
    const review = await Review.findOne({ user: userId, book: bookId })
      .populate('user')
      .populate('book');
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.json(review);
  } catch (error) {
    console.error('Error fetching review:', error);
    res.status(500).json({ error: 'Error fetching review' });
  }
});

router.delete('/:reviewId', async (req, res) => {
  const { reviewId } = req.params;

  try {
    // Find the review to be deleted based on reviewId
    const reviewToDelete = await Review.findByIdAndDelete(reviewId);

    if (!reviewToDelete) {
      return res.status(404).json({ error: 'Review not found' });
    }

    res.json({
      message: 'Review deleted successfully',
      deletedReview: reviewToDelete,
    });
  } catch (error) {
    console.error('Error deleting review:', error);
    res.status(500).json({ error: 'Error deleting review' });
  }
});

module.exports = router;
