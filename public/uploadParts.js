const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/carmania');

let part = [
    {
        id: 1,
        uid: 16,
        cat: 'part',
        name: 'Dual Black M Exhaust',
        image1: 'Images/Parts/part1_img1.jpg',
        image2: 'Images/Parts/part1_img2.jpg',
        price: 12699,
        rating: 4,
        description1: 'They are manufactured using high-quality 2*2 3K Carbon Fibre twill with 304 Stainless Steel.',
        description2: 'Created to give that M Performance look whether you have the M Performance Exhaust or not',
        description3: '2* Heavy Duty Miaklor Clamps for Fitting.'
    },
    {
        id: 2,
        uid: 17,
        cat: 'part',
        name: 'Yellow DRL Headlight LED',
        image1: 'Images/Parts/part2_img1.jpg',
        image2: 'Images/Parts/part2_img2.jpg',
        price: 6399,
        rating: 5,
        description1: 'Manufactured using high-quality ABS Plastic and LED Technology.',
        description2: '3000K Colour Fequency.',
        description3: 'Suitable Cars: BMW M3 (F80) 4-Door Saloon (2016-2019), BMW M4 (F82) 2-Door Coupe (2016-2020), BMW M4 (F83) 2-Door Convertible (2016-2020)'
    },
    {
        id: 3,
        uid: 18,
        cat: 'part',
        name: 'Front Fog Light Trim',
        image1: 'Images/Parts/part3_img1.jpg',
        image2: 'Images/Parts/part3_img2.jpg',
        price: 6799,
        rating: 3,
        description1: 'Style - BRABUS B900 Style Front Fog Light Trim',
        description2: 'Material - Pre-Preg Carbon Fibre',
        description3: 'Finish - UV Resistant Gloss Resin Coating'
    },
    {
        id: 4,
        uid: 19,
        cat: 'part',
        name: 'Front Lip Spoiler',
        image1: 'Images/Parts/part4_img1.jpg',
        image2: 'Images/Parts/part4_img2.jpg',
        price: 24999,
        rating: 4,
        description1: 'They are manufactured using High-Quality 2*2 3K Twill Carbon Fibre and FRP.',
        description2: 'They are created using precision moulds from OEM parts for excellent fitment.',
        description3: 'Aerodynamic Carbon Fibre Front Bumper Lip Spoiler for the Ferrari 458 Berlinetta 2 Door Coupe and Convertible Models.'
    },
    {
        id: 5,
        uid: 20,
        cat: 'part',
        name: 'Rear Spoiler Wing Kit',
        image1: 'Images/Parts/part5_img1.jpg',
        image2: 'Images/Parts/part5_img2.jpg',
        price: 9999,
        rating: 5,
        description1: 'Features: High tensile strength, Anti-corrosive wearable coating, High-temperature resistance',
        description2: 'Manufactured using High-Quality 2*2 3K Twill Carbon Fibre With FRP.',
        description3: 'Created using precision moulds from OEM parts for great fitment.'
    },
];


const partSchema = new mongoose.Schema({
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

const Part = mongoose.model('Part', partSchema);

Part.insertMany(part).then(()=>{
    console.log("Data inserted");
    mongoose.connection.close();
})