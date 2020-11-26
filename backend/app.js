const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 5000;
const Picture = require('./models/pictures');
const User = require('./models/User');

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

app.get('/:album/pictures/', async function (req, res) {
    const pictures = await Picture.find({ album: req.params.album });
    res.send({ pictures });
});

app.get('/user', async function (req, res) {
    const user = await User.find({ name: req.params.name });
    res.send({ pictures });
});


app.listen(port, function () {
    console.log(`Server is running on ${port}`);
});