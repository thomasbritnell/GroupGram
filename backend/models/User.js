const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const GroupSchema = require('./Group')

const UserSchema = new Schema({
    username: String,
    firstName: String,
    lastName: String,
    email: String,
    groups: [GroupSchema]
});

module.exports = UserSchema;