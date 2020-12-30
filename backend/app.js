const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 5000;
const Picture = require('./models/pictures');
const User = require('./models/User');
const Album = require('./models/Album');

mongoose.connect('mongodb://localhost:27017/famgram', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.get('/', function (req, res) {
    res.send('hello world');
});

app.get('/album/:id/', async function (req, res) {
    const album = await Album.find({ _id: req.params.id })
    res.send({ album });
});

app.get('/:group/albums/', async function (req, res) {
    const albums = await Album.find({ group: req.params.group })
    res.send({ albums });
});

app.listen(port, function () {
    console.log(`Server is running on ${port}`);
});