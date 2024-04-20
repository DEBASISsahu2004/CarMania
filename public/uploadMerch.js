const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/carmania");

let merch = [
    {
        id: 1,
        uid: 11,
        cat: 'merch',
        name: 'POLO T-shirt',
        image1: 'Images/Fashion/product1_img1.jpg',
        image2: 'Images/Fashion/product1_img2.jpg',
        image3: 'Images/Fashion/product1_img3.jpg',
        rating: 3,
        price: 539,
        description: 'Automobili Lamborghini Iconic Polo Shirt in cotton piqué. Customised with a rubberised logo shield on the chest, a script logo print design and a three-tone detail on the back. Regular fit. Composition: 95% cotton, 5% elastane.'
    },
    {
        id: 2,
        uid: 12,
        cat: 'merch',
        name: 'Crew Neck T-shirt',
        image1: 'Images/Fashion/product2_img1.jpg',
        image2: 'Images/Fashion/product2_img2.jpg',
        image3: 'Images/Fashion/product2_img3.jpg',
        rating: 4,
        price: 699,
        description: 'Automobili Lamborghini Iconic Big Shield Crew Neck T-shirt in cotton jersey. Customised with a single-colour shield print, a script logo print design and a three-tone detail on the back. Regular fit. Composition: 100% cotton.'
    },
    {
        id: 3,
        uid: 13,
        cat: 'merch',
        name: 'Full Zip Sweatshirt',
        image1: 'Images/Fashion/product3_img1.jpg',
        image2: 'Images/Fashion/product3_img2.jpg',
        image3: 'Images/Fashion/product3_img3.jpg',
        rating: 4,
        price: 899,
        description: 'Automobili Lamborghini Iconic Full Zip Sweatshirt for women. Customised with a rubberised logo shield on the chest, a script logo print design and a three-tone detail on the back. Two side pockets. Composition: 80% cotton, 20% polyester.'
    },
    {
        id: 4,
        uid: 14,
        cat: 'merch',
        name: 'Gold Shield Logo Cap',
        image1: 'Images/Fashion/product4_img1.jpg',
        image2: 'Images/Fashion/product4_img2.jpg',
        image3: 'Images/Fashion/product4_img3.jpg',
        rating: 5,
        price: 499,
        description: 'Iconic unisex Automobili Lamborghini cap customised with Gold Shield Logo print with embossed print.'
    },
    {
        id: 5,
        uid: 15,
        cat: 'merch',
        name: 'Squadra Corse Backpack',
        image1: 'Images/Fashion/product5_img1.jpg',
        image2: 'Images/Fashion/product5_img2.jpg',
        image3: 'Images/Fashion/product5_img3.jpg',
        rating: 4,
        price: 790,
        description: 'Automobili Lamborghini Squadra Corse Backpack, featuring the official colours of the Racing Team from Sant’Agata Bolognese. The backpack has padded shoulder straps, two zipped external pockets and internal compartments of various sizes to accommodate and iPad and PC. Dimensions: 45 x 33 x 13 cm.'
    },
];

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

let Merch = mongoose.model('Merch', merchSchema);

Merch.insertMany(merch).then(()=>{
    console.log("Data inserted");
    mongoose.connection.close();
})