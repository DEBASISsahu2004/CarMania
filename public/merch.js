const mongoose = require('mongoose');
let merchSchema = new mongoose.Schema({
    id: Number,
    uid: Number,
    cat: String,
    name: String,
    image1: String,
    image2: String,
    image3: String,
    rating: Number,
    price: Number,
    description: String
});

module.exports = mongoose.model('Merch', merchSchema);