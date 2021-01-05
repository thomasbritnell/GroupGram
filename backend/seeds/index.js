const mongoose = require('mongoose');
const Album = require('../models/Album');
cost
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
    /*
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
    */
    const user = new User({
        "username": "Olga_Medhurst37",
        "firstName": "Mertie",
        "lastName": "Gulgowski",
        "email": "Willis_Ankunding@yahoo.com",
        "groups": [group]
    });

    const album = new Album({
        "creator": user,
        "postDate": "2020-08-03T21:12:23.964Z",
        "albumName": "Album Name 1",
        "pictures": [picture],
        "imageURL": "http://lorempixel.com/640/480/cats",
    });

    const picture = new Picture({
        "caption": "Tools focus group Borders",
        "location": "Myronberg",
        "creator": user,
        "postDate": "2020-08-03T21:12:23.964Z",
        "imageURL": "http://lorempixel.com/640/480/technics",
        "album": album,
    });

    const group = new Group({
        "name": "HS",
        "members": [user],
        "imageURL": "http://lorempixel.com/640/480/technics",
        "albums": [album]
    });

    /*
        const album = new Album({
            creator: {
                "id": "1",
                "username": "Doyle25",
                "firstName": "Cloyd",
                "lastName": "Rolfson",
                "email": "Javier30@hotmail.com"
            },
            postDate: "2020-08-03T21:12:23.964Z",
            albumName: "Album Name 1",
            pictures: [
                {
                    "id": "1",
                    "postDate": "2020-08-03T21:12:23.964Z",
                    "user": "Alena97",
                    "caption": "Tools focus group Borders",
                    "imageURL": "http://lorempixel.com/640/480/technics",
                    "location": "Myronberg",
    
                },
                {
                    "id": "2",
                    "postDate": "2019-11-30T03:31:05.123Z",
                    "user": "Alena97",
                    "caption": "challenge",
                    "imageURL": "http://lorempixel.com/640/480/business",
                    "location": "Gilesmouth",
    
                },
                {
                    "id": "3",
                    "postDate": "2020-03-06T04:02:56.249Z",
                    "user": "Alena97",
                    "caption": "black",
                    "imageURL": "http://lorempixel.com/640/480/cats",
                    "location": "Hegmannbury",
    
                },
                {
                    "id": "4",
                    "postDate": "2020-10-06T01:58:11.956Z",
                    "user": "Winston48",
                    "caption": "microchip hacking",
                    "imageURL": "http://lorempixel.com/640/480/technics",
                    "location": "Devinview",
    
                },
                {
                    "id": "5",
                    "postDate": "2020-07-07T02:47:14.588Z",
                    "user": "Winston48",
                    "caption": "Egypt deposit",
                    "imageURL": "http://lorempixel.com/640/480/technics",
                    "location": "South Mauricehaven",
    
                }],
            group: "HS",
            imageURL: "http://lorempixel.com/640/480/business",
        })
    
        const album2 = new Album({
            creator: {
                "id": "4",
                "username": "Astrid71",
                "firstName": "Lenore",
                "lastName": "Schneider",
                "email": "Alda.Cruickshank12@yahoo.com"
            },
            postDate: "2019-11-30T03:31:05.123Z",
            albumName: "AlbumName2",
            pictures: [{
                "id": "13",
                "postDate": "2020-03-14T03:43:09.436Z",
                "user": "Christop.Wolf",
                "caption": "Soap",
                "imageURL": "http://lorempixel.com/640/480/fashion",
                "location": "Port Diamond",
            },
            {
                "id": "14",
                "postDate": "2020-06-08T23:37:43.618Z",
                "user": "Christop.Wolf",
                "caption": "withdrawal deposit hard drive",
                "imageURL": "http://lorempixel.com/640/480/abstract",
                "location": "Klockofort",
            },
            {
                "id": "15",
                "postDate": "2020-10-23T18:07:26.509Z",
                "user": "Linnie66",
                "caption": "Money Market Account",
                "imageURL": "http://lorempixel.com/640/480/abstract",
                "location": "Waelchiview",
            },
            {
                "id": "16",
                "postDate": "2020-09-15T13:11:06.387Z",
                "user": "Linnie66",
                "caption": "Tunnel",
                "imageURL": "http://lorempixel.com/640/480/animals",
                "location": "South Valentinafort",
            }],
            group: "HS",
            imageURL: "http://lorempixel.com/640/480/cats",
        })
    
        // const album3 = new Album({
        //     creator: "Doyle2",
        //     postDate: "2019-11-30T03:31:05.123Z",
        //     albumName: "Test",
        //     group: "HS",
        //     imageURL: "http://lorempixel.com/640/480/cats",
        // })
    */
    await user.save()
    await picture.save()
    await album.save()
    await group.save()
    // await album3.save()

}

seedDB().then(() => {
    mongoose.connection.close();
});