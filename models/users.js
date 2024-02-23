const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    goal: String,
    start_date: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;