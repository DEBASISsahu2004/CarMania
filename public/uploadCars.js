const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/carmania");
let ferrari = [
    {
        id: 1,
        uid: 1,
        cat: 'ferrari',
        price: 7.59,
        rating: 5,
        name: 'SF90 Stradale',
        image1: 'Images/Ferrari/SF90_image1.webp',
        image2: 'Images/Ferrari/SF90_image2.webp',
        image3: 'Images/Ferrari/SF90_image3.webp',
        image4: 'Images/Ferrari/SF90_image4.webp',
        image5: 'Images/Ferrari/SF90_image5.webp',
        fuel: 'Petrol',
        cylinder: 'V8',
        engine: '3990cc',
        tank_capacity: '68.00L',
        seating_capacity: '2',
        mileage: '18 kmpl',
        top_speed: '340 kmph'
    },
    {
        id: 2,
        uid: 2,
        cat: 'ferrari',
        name: 'Purosangue',
        price: 5.25,
        rating: 4,
        image1: 'Images/Ferrari/Purosangue_image1.webp',
        image2: 'Images/Ferrari/Purosangue_image2.webp',
        image3: 'Images/Ferrari/Purosangue_image3.webp',
        image4: 'Images/Ferrari/Purosangue_image4.webp',
        image5: 'Images/Ferrari/Purosangue_image5.webp',
        fuel: 'Petrol',
        cylinder: 'V12',
        engine: '6496cc',
        tank_capacity: '100.00L',
        seating_capacity: '4',
        mileage: '10 kmpl',
        top_speed: '310 kmph'
    },
    {
        id: 3,
        uid: 3,
        cat: 'ferrari',
        name: 'F8 Tributo',
        price: 4.02,
        rating: 5,
        image1: 'Images/Ferrari/F8_Tributo_image1.webp',
        image2: 'Images/Ferrari/F8_Tributo_image2.webp',
        image3: 'Images/Ferrari/F8_Tributo_image3.jpg',
        image4: 'Images/Ferrari/F8_Tributo_image4.webp',
        image5: 'Images/Ferrari/F8_Tributo_image5.jpg',
        fuel: 'Petrol',
        cylinder: 'V8',
        engine: '3902cc',
        tank_capacity: '78.00L',
        seating_capacity: '2',
        mileage: '7.8 kmpl',
        top_speed: '340 kmph'
    },
    {
        id: 4,
        uid: 4,
        cat: 'ferrari',
        name: '812 GTS',
        price: 5.75,
        rating: 5,
        image1: 'Images/Ferrari/812_image1.webp',
        image2: 'Images/Ferrari/812_image2.webp',
        image3: 'Images/Ferrari/812_image3.webp',
        image4: 'Images/Ferrari/812_image4.webp',
        image5: 'Images/Ferrari/812_image5.webp',
        fuel: 'Petrol',
        cylinder: 'V12',
        engine: '6496cc',
        tank_capacity: '92.00L',
        seating_capacity: '2',
        mileage: '6.5 kmpl',
        top_speed: '340 kmph'
    },
    {
        id: 5,
        uid: 5,
        cat: 'ferrari',
        name: 'Monza SP1',
        price: 3.35,
        rating: 3,
        image1: 'Images/Ferrari/manzaSP1_image1.webp',
        image2: 'Images/Ferrari/manzaSP1_image2.webp',
        image3: 'Images/Ferrari/manzaSP1_image3.webp',
        image4: 'Images/Ferrari/manzaSP1_image4.webp',
        image5: 'Images/Ferrari/manzaSP1_image5.webp',
        fuel: 'Petrol',
        cylinder: 'V12',
        engine: '6496cc',
        tank_capacity: '90.00L',
        seating_capacity: '1',
        mileage: '16.1 kmpl',
        top_speed: '300 kmph'
    }
];

let astonMartin = [
    {
        id: 1,
        uid: 6,
        cat: 'astonMartin',
        price: 4.59,
        rating: 4,
        name: 'DB12',
        image1: 'Images/Aston_martin/DB12_image1.webp',
        image2: 'Images/Aston_martin/DB12_image2.webp',
        image3: 'Images/Aston_martin/DB12_image3.webp',
        image4: 'Images/Aston_martin/DB12_image4.webp',
        image5: 'Images/Aston_martin/DB12_image5.webp',
        fuel: 'Petrol',
        cylinder: 'V8',
        engine: '5198cc',
        tank_capacity: '78.00L',
        seating_capacity: '4',
        mileage: '12.75 kmpl',
        top_speed: '325 kmph'
    },
    {
        id: 2,
        uid: 7,
        cat: 'astonMartin',
        name: 'DBS Superleggera',
        price: 5.36,
        rating: 3,
        image1: 'Images/Aston_martin/DBS_image1.webp',
        image2: 'Images/Aston_martin/DBS_image2.webp',
        image3: 'Images/Aston_martin/DBS_image3.webp',
        image4: 'Images/Aston_martin/DBS_image4.webp',
        image5: 'Images/Aston_martin/DBS_image5.webp',
        fuel: 'Petrol',
        cylinder: 'V12',
        engine: '5204cc',
        tank_capacity: '78.00L',
        seating_capacity: '4',
        mileage: '8 kmpl',
        top_speed: '340 kmph'
    },
    {
        id: 3,
        uid: 8,
        cat: 'astonMartin',
        name: 'DBX 707',
        price: 4.63,
        rating: 3,
        image1: 'Images/Aston_martin/DBX_image1.webp',
        image2: 'Images/Aston_martin/DBX_image2.webp',
        image3: 'Images/Aston_martin/DBX_image3.webp',
        image4: 'Images/Aston_martin/DBX_image4.webp',
        image5: 'Images/Aston_martin/DBX_image5.webp',
        fuel: 'Petrol',
        cylinder: 'V8',
        engine: '3982cc',
        tank_capacity: '85.00L',
        seating_capacity: '5',
        mileage: '10.1 kmpl',
        top_speed: '310 kmph'
    },
    {
        id: 4,
        uid: 9,
        cat: 'astonMartin',
        name: 'Vantage 2024',
        price: 4.26,
        rating: 4,
        image1: 'Images/Aston_martin/Vantage_image1.jpg',
        image2: 'Images/Aston_martin/Vantage_image2.jpg',
        image3: 'Images/Aston_martin/Vantage_image3.jpg',
        image4: 'Images/Aston_martin/Vantage_image4.jpg',
        image5: 'Images/Aston_martin/Vantage_image5.jpg',
        fuel: 'Petrol',
        cylinder: 'V12',
        engine: '5269cc',
        tank_capacity: '92.00L',
        seating_capacity: '4',
        mileage: '8.5 kmpl',
        top_speed: '320 kmph'
    },
    {
        id: 5,
        uid: 10,
        cat: 'astonMartin',
        name: 'Valkyrie',
        price: 5.58,
        rating: 5,
        image1: 'Images/Aston_martin/Valkyrie_image1.webp',
        image2: 'Images/Aston_martin/Valkyrie_image2.webp',
        image3: 'Images/Aston_martin/Valkyrie_image3.webp',
        image4: 'Images/Aston_martin/Valkyrie_image4.webp',
        image5: 'Images/Aston_martin/Valkyrie_image5.webp',
        fuel: 'Petrol',
        cylinder: 'V12',
        engine: '6496cc',
        tank_capacity: '90.00L',
        seating_capacity: '2',
        mileage: '9.1 kmpl',
        top_speed: '380 kmph'
    }
];


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

const Car = mongoose.model('Car', carSchema);

ferrari.forEach(async function(ele){
    let car = new Car(ele);
    await car.save();
});

astonMartin.forEach(async function(ele){
    let car = new Car(ele);
    await car.save();
});

