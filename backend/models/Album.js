const mongoose = require('mongoose')
const Schema = mongoose.Schema,
    albumID = mongoose.Schema.ObjectId;

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
    imageURL: String,
});

module.exports = mongoose.model('Album', AlbumSchema);