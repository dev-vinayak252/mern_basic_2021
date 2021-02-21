const express = require('express');
const connectDB = require('./config/db');
// const path = require('path');

const app = express();

// Connect Database
connectDB();

app.use(express.json({ extended: false }));
// app.use(express.static(path.join(__dirname, "client/build")));

app.use('/api/books', require('./routes/api/books'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Express server started at port: ${PORT}`) });