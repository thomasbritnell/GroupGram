const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const UserSchema = require('./User')

const PictureSchema = new Schema({
    caption: String,
    location: String,
    creator: UserSchema,
    postDate: Date,
    imageURL: String,
});

module.exports = PictureSchema;