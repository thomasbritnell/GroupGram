const mongoose = require('mongoose')
const Schema = mongoose.Schema,
    albumID = mongoose.Schema.ObjectId;

const AlbumSchema = new Schema({
    creator: String,
    postDate: Date,
    albumName: String,
    group: String,
    id: albumID.toString,
});

module.exports = mongoose.model('Album', AlbumSchema);