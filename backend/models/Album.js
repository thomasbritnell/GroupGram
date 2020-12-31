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
    user: UserSchema,
    postDate: Date,
    imageURL: String,
});

const AlbumSchema = new Schema({
    creator: UserSchema,
    postDate: Date,
    albumName: String,
    pictures: [PictureSchema],
    imageURL: String,
});

const GroupSchema = new Schema({
    name: String,
    members: [UserSchema._id],
    imageURL: String,
    albums: [AlbumSchema],
});

module.exports = mongoose.model('Group', GroupSchema);