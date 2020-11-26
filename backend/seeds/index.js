const mongoose = require('mongoose');
const port = 3000;
const Picture = require('../models/pictures');
const User = require('../models/User');
const seeds = require('./seedHelpers');

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

const seedDB = async () => {
    await Picture.deleteMany({});
    for (let i = 0; i < 30; i++) {
        const picture = new Picture({
            location: seeds[i].location,
            caption: seeds[i].caption,
            creator: seeds[i].creator,
            postDate: seeds[i].postDate,
            imageURL: seeds[i].imageURL,
            album: seeds[i].album,
        })
        await picture.save()
    }

    const user = new User({
        name: "Test User",
        pwd: "password",
    })
    user.save();
}

seedDB().then(() => {
    mongoose.connection.close();
});