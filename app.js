

const express = require('express');

const app = express();

// Mongoose connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodemongo');
const db = mongoose.connection;

db.once('open', function(){
    console.log("Connected to MongoDB successfully!");
});
db.on('error', function(){
    console.log(err);
});

app.get('/', function (req, res) {
    res.send('hello world')
});

app.listen(3000, function(){
    console.log("Server started on localhost:3000");
});