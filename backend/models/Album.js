const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    creator: String,
    postDate: Date,
    albumName: String,
    group: String,
});

module.exports = mongoose.model('Album', AlbumSchema);