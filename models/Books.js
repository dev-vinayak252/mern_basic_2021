const mongoose = require('mongoose');
const booksSchema = mongoose.Schema({
    bookName: String,
    bookPrice: String
});

module.exports = Books = mongoose.model('mb_books', booksSchema);