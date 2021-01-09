const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const UserSchema = require('./User')
const PictureSchema = require('./Picture')

const AlbumSchema = new Schema({
    creator: UserSchema,
    postDate: Date,
    albumName: String,
    pictures: [PictureSchema],
    imageURL: String,
});


module.exports = AlbumSchema;