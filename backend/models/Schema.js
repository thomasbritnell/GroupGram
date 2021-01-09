const mongoose = require('mongoose')

const Group = mongoose.model('Group', require('./Group.js'))
const User = mongoose.model('User', require('./User.js'))
const Picture = mongoose.model('Picture', require('./Picture.js'))
const Album = mongoose.model('Album', require('./Album.js'))

module.exports = { Group, User, Picture, Album }