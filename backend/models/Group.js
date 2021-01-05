const mongoose = require('mongoose')
const Schema = mongoose.Schema,
    albumID = mongoose.Schema.ObjectId;

const UserSchema = new Schema({
    username: String,
    firstName: String,
    lastName: String,
    email: String,
    groups: [GroupSchema]
});

const PictureSchema = new Schema({
    caption: String,
    location: String,
    creator: UserSchema,
    postDate: Date,
    imageURL: String,
    album: AlbumSchema,
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
    members: [UserSchema],
    imageURL: String,
    albums: [AlbumSchema],
});

module.exports = mongoose.model('Group', GroupSchema);
module.exports = mongoose.model('User', UserSchema);
module.exports = mongoose.model('Picture', PictureSchema);
module.exports = mongoose.model('Album', AlbumSchema);