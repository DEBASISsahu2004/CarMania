const mongoose = require('mongoose');

let partSchema = new mongoose.Schema({
    id: Number,
    uid: Number,
    cat: String,
    name: String,
    image1: String,
    image2: String,
    price: Number,
    rating: Number,
    description1: String,
    description2: String,
    description3: String
});

module.exports = mongoose.model('Part', partSchema);