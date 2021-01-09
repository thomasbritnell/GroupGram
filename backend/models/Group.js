const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const UserSchema = require('./User')
const AlbumSchema = require('./Album')

const GroupSchema = new Schema({
    name: String,
    members: [UserSchema],
    imageURL: String,
    albums: [AlbumSchema],
});

module.exports = GroupSchema;