const mongoose = require('mongoose')
const Schema = mongoose.Schema,
    albumID = mongoose.Schema.ObjectId;

const AlbumSchema = new Schema({
    creator: String,
    postDate: Date,
    albumName: String,
    group: String,
    imageURL: String,
});

module.exports = mongoose.model('Album', AlbumSchema);