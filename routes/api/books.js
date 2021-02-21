const express = require('express');
const Books = require('../../models/Books');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const books = await Books.find({});
        res.status(200).json(books);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;