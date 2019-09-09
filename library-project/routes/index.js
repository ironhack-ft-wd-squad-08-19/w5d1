const express = require("express");
const Book = require("../models/Book");

const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/books", (req, res) => {
  // get all the books
  // render a 'books' view with the books data

  Book.find().then(books => {
    res.render("books", { booksList: books });
  });
});

router.get("/books/:bookId", (req, res) => {
  const bookId = req.params.bookId;

  Book.findById(bookId).then(book => {
    res.render("bookDetails", { book: book });
  });
});

module.exports = router;
