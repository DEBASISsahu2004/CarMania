const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/soles");

products_list_heat = [
  // array of products type: heat
  {
    name: "jordan 1",
    src: "images/jordan_1.jpeg",
    src2: "images/jordan_12.jpeg",
    src3: "images/jordan_13.jpeg",
    src4: "images/jordan_14.jpeg",
    id: 1,
    price: 175,
    review: 3,
  },
  {
    name: "yeezy spl 350",
    src: "images/yeezy_spl_350.webp",
    src2: "images/yeezy_spl_3502.webp",
    src3: "images/yeezy_spl_3503.webp",
    src4: "images/yeezy_spl_3504.webp",
    id: 2,
    price: 250,
    review: 4,
  },
  {
    name: "new balance 550",
    src: "images/new_balance_550.jpg",
    src2: "images/new_balance_5502.webp",
    src3: "images/new_balance_5503.webp",
    src4: "images/new_balance_5504.webp",
    id: 3,
    price: 120,
    review: 5,
  },
  {
    name: "nike dunk",
    src: "images/nike_dunk.png",
    src2: "images/nike_dunk2.png",
    src3: "images/nike_dunk3.png",
    src4: "images/nike_dunk4.png",
    id: 4,
    price: 90,
    review: 4,
  },
  {
    name: "adidas campus",
    src: "images/adidas_campus.png",
    src2: "images/adidas_campus2.png",
    src3: "images/adidas_campus3.png",
    src4: "images/adidas_campus4.png",
    id: 5,
    price: 100,
    review: 4,
  },
  {
    name: "converse chuck taylor",
    src: "images/converse_chuck_taylor.jpg",
    src2: "images/converse_chuck_taylor2.webp",
    src3: "images/converse_chuck_taylor3.webp",
    src4: "images/converse_chuck_taylor4.webp",
    id: 6,
    price: 80,
    review: 3,
  },
  {
    name: "vans old skool",
    src: "images/vans_old_skool.webp",
    src2: "images/vans_old_skool2.webp",
    src3: "images/vans_old_skool3.webp",
    src4: "images/vans_old_skool4.webp",
    id: 7,
    price: 70,
    review: 5,
  },
  {
    name: "puma suede",
    src: "images/puma_suede.jpg",
    src2: "images/puma_suede2.webp",
    src3: "images/puma_suede3.webp",
    src4: "images/puma_suede4.webp",
    id: 8,
    price: 90,
    review: 4,
  },
  {
    name: "nike air force 1",
    src: "images/nike_air_force_1.jpeg",
    src2: "images/nike_air_force_12.jpeg",
    src3: "images/nike_air_force_13.jpeg",
    src4: "images/nike_air_force_14.jpeg",
    id: 9,
    price: 120,
    review: 3,
  },
  {
    name: "reebok club c",
    src: "images/reebokClub.png",
    src2: "images/reebokClub2.png",
    src3: "images/reebokClub3.png",
    src4: "images/reebokClub4.png",
    id: 10,
    price: 90,
    review: 3,
  },
];

products_list_merchandise = [
  // array of products type: merchandise
  {
    name: "hoodie",
    src: "images/hoodie.png",
    src2: "images/hoodie2.webp",
    src3: "images/hoodie3.webp",
    src4: "images/hoodie4.webp",
    id: 11,
    price: 50,
    review: 5,
  },
  {
    name: "bag",
    src: "images/bag.png",
    src2: "images/bag2.png",
    src3: "images/bag3.png",
    src4: "images/bag4.png",
    id: 16,
    price: 40,
    review: 4,
  },

  {
    name: "hat",
    src: "images/hat.png",
    src2: "images/hat2.png",
    src3: "images/hat3.png",
    src4: "images/hat4.jpg",
    id: 13,
    price: 20,
    review: 4,
  },
  {
    name: "shorts",
    src: "images/shorts.webp",
    src2: "images/shorts2.jpeg",
    src3: "images/shorts3.png",
    src4: "images/shorts4.png",
    id: 15,
    price: 30,
    review: 3,
  },

  {
    name: "jacket",
    src: "images/jacket.webp",
    src2: "images/jacket2.webp",
    src3: "images/jacket3.webp",
    src4: "images/jacket4.webp",
    id: 17,
    price: 80,
    review: 5,
  },
];

products_list_basketball = [
  // array of products type: basketball shoes
  {
    name: "lebron 20",
    src: "images/lebron_20.webp",
    src2: "images/lebron_202.jpg",
    src3: "images/lebron_203.jpg",
    src4: "images/lebron_204.jpg",
    id: 21,
    price: 200,
    review: 3,
  },
  {
    name: "kd 16",
    src: "images/kd_16.png",
    src2: "images/kd_162.png",
    src3: "images/kd_163.png",
    src4: "images/kd_164.png",
    id: 22,
    price: 150,
    review: 4,
  },
  {
    name: "kobe 6",
    src: "images/kobe_6.jpg",
    src2: "images/kobe_62.jpg",
    src3: "images/kobe_63.jpg",
    src4: "images/kobe_64.jpg",
    id: 23,
    price: 180,
    review: 5,
  },
  {
    name: "pg 6",
    src: "images/pg_6.png",
    src2: "images/pg_62.png",
    src3: "images/pg_63.png",
    src4: "images/pg_64.png",
    id: 24,
    price: 120,
    review: 4,
  },
  {
    name: "curry 4",
    src: "images/curry_4.webp",
    src2: "images/curry_42.webp",
    src3: "images/curry_43.webp",
    src4: "images/curry_44.webp",
    id: 25,
    price: 160,
    review: 3,
  },
];

const prod = new mongoose.Schema({
  name: String,
  src: String,
  src2: String,
  src3: String,
  src4: String,
  id: Number,
  price: Number,
  review: Number,
  category: String,
});

const Product = mongoose.model("Product", prod); // model for products

products_list_heat.forEach((product) => {
  const inp = new Product(product);
  inp.category = "heat";
  inp.save();
});

products_list_merchandise.forEach((product) => {
  const inp = new Product(product);
  inp.category = "merchandise";
  inp.save();
});

products_list_basketball.forEach((product) => {
  const inp = new Product(product);
  inp.category = "basketball";
  inp.save();
});
