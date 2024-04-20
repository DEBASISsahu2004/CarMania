const mongoose = require("mongoose");

let carSchema = new mongoose.Schema({
    id: Number,
    uid: Number,
    cat: String,
    price: Number,
    rating: Number,
    name: String,
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    image5: String,
    fuel: String,
    cylinder: String,
    engine: String,
    tank_capacity: String,
    seating_capacity: String,
    mileage: String,
    top_speed: String
});

module.exports= mongoose.model('Car', carSchema);

