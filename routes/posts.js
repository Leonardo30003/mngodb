const express = require('express');
const Post = require('.. /models/Post');
const posts = require('./routes/posts');
// Initialize app
const router = express.Router();
router.get('/', function (req, res) {
    res.send('home');
});
module.exports = router;

app.use('/posts', posts);
