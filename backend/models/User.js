const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    firstName: String,
    lastName: String,
    email: String,
});

module.exports = mongoose.model('User', UserSchema);