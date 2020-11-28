const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PictureSchema = new Schema({
    caption: String,
    location: String,
    user: Number,
    postDate: Date,
    imageURL: String,
    album: String,
});

module.exports = mongoose.model('Picture', PictureSchema);