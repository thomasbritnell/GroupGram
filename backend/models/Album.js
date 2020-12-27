const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    firstName: String,
    lastName: String,
    email: String,
});

const PictureSchema = new Schema({
    caption: String,
    location: String,
    user: String,
    postDate: Date,
    imageURL: String,
});


const AlbumSchema = new Schema({
    creator: UserSchema,
    postDate: Date,
    albumName: String,
    pictures: [PictureSchema],
    group: String,
});

module.exports = mongoose.model('Album', AlbumSchema);