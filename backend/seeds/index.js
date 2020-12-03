const mongoose = require('mongoose');
const Album = require('../models/Album');
const port = 3000;
const Picture = require('../models/pictures');
const User = require('../models/User');
const seeds = require('./seedHelpers');
const userSeeds = require('./usersSeed')

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
    await User.deleteMany({});
    await Album.deleteMany({});
    for (let i = 0; i < 30; i++) {
        const picture = new Picture({
            location: seeds[i].location,
            caption: seeds[i].caption,
            user: seeds[i].user,
            postDate: seeds[i].postDate,
            imageURL: seeds[i].imageURL,
            album: seeds[i].album,
        })
        await picture.save()
    }

    for (let i = 0; i < 25; i++) {
        const user = new User({
            username: userSeeds[i].username,
            firstName: userSeeds[i].firstName,
            lastName: userSeeds[i].lastName,
            email: userSeeds[i].email
        })
        await user.save()
    }

    const album = new Album({
        creator: "Alena97",
        postDate: "2020-08-03T21:12:23.964Z",
        albumName: "teal",
        group: "HS",
    })

    const album2 = new Album({
        creator: "Doyle25",
        postDate: "2019-11-30T03:31:05.123Z",
        albumName: "gold",
        group: "HS",
    })

    await album.save()
    await album2.save()
}

seedDB().then(() => {
    mongoose.connection.close();
});