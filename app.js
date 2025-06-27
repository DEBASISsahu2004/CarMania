require("dotenv").config();
const express = require ("express");
const mongoose = require ("mongoose");  
const app = express();

// Enable CORS for all routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
const path = require("path");
const User = require("./public/users.js");
const Car = require("./public/cars.js");
const Merch = require("./public/merch.js");
const Part = require("./public/parts.js");

// Health check endpoint
app.get("/", function(req, res) {
    res.json({ message: "CarMania API is running!", timestamp: new Date().toISOString() });
});

// API health check
app.get("/health", function(req, res) {
    res.json({ status: "OK", message: "API is healthy" });
});

app.get("/connectdb",async function(req,res){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        res.status(200).json({status:200,message:"Connected to database"});
    }catch(e){
        console.error("Database connection error:", e);
        res.status(400).json({status:400,message:"Error connecting to database", error: e.message});
    }
}))

app.post("/signup",async function(req,res){
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        wishlist: [],
        cart: []
    });
   if(await User.findOne({username:req.body.username})){
    res.status(404).json({status:404,message: "User already exists"});
   }
   else{
    try{
        await user.save();
        res.status(200).json({status:200,message: "User registered successfully"});
    }catch(e){
        res.status(400).json({status:400,message: "Some error occurred"});
    }
   }
})


app.post("/login",async function(req,res){
    let user =await  User.findOne({username: req.body.username});
    try{if(user){
        if(user.password === req.body.password){
            res.status(200).json({status:200,message: "Login successful"});
        }
        else{
            res.status(404).json({status:403,message: "Incorrect password"});
        }
    }else{
        res.status(404).json({status:404,message: "User not found"});
    }}catch(e){
        console.log(e);
        res.status(400).json({status:400,message: "Some error occurred"});
    }
})


app.get("/get/ferrari",async function(req,res){
    let cars = await Car.find({cat: "ferrari"});
    res.status(200).json(cars);
});

app.get("/get/astonmartin",async function(req,res){
    let cars = await Car.find({cat: "astonMartin"});
    res.status(200).json(cars);
});

app.get("/get/merchandise",async function(req,res){
    let merch = await Merch.find();
    res.status(200).json(merch);
});

app.get("/get/parts",async function(req,res){
    let parts = await Part.find();
    res.status(200).json(parts);
});    

app.get("/getUser/:username",async function(req,res){
    let username = req.params.username;
    try{
        let user = await User.findOne({username:username});
        res.status(200).json(user);
    }catch(e){
        console.log(e);
        res.status(404).json({message:"user not found"});
    }
})


app.post("/update/wishlist", async function(req,res){
    let userID= req.body.userID;
    let wishlist = req.body.wishlistItemId;
    try{
        let user = await User.findOneAndUpdate(
            {_id: userID},
            {wishlist:wishlist},
            {new:true}
        );
        if(user){
            res.status(200).json({message:"success"});
        }
        else{
            res.status(404).json({message:"ERROR"});
        }
    }catch(e){
        console.log(e);
        res.status(404).json({message:"ERROR"});
    }
})

app.post("/update/cart", async function(req,res){
    let userID= req.body.userID;
    let cart = req.body.cartItemId;
    try{
        let user = await User.findOneAndUpdate(
            {_id: userID},
            {cart:cart},
            {new:true}
        );
        if(user){
            res.status(200).json({message:"success"});
        }
        else{
            res.status(404).json({message:"ERROR"});
        }
    }catch(e){
        console.log(e);
        res.status(404).json({message:"ERROR"});
    }
})

app.all("*",function(req,res){
    res.status(404).sendFile(path.resolve(__dirname,"public","error.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`listening at port ${PORT}`);
})