const express = require ("express");
const mongoose = require ("mongoose");  
const app = express();
mongoose.connect("mongodb://localhost:27017/carmania");
app.use(express.urlencoded({extended: true}));

const path = require("path");
const User = require("./public/users.js");


app.get("/",async function(req,res){
    let user = new User({
        username: "ashutosh",
        email: "ashaz22@gmail.com",
        password: "123456",
        wishlist:[],
        cart:[],
    })
    try{
        await user.save();
        res.status(200).json({message: "User registered successfully"});
    }catch(e){
        res.status(400).json({message: "Some error occurred"});
    }
})

app.get("/getsome",async function(req,res){
    let data = await User.find();
    console.log(data);
    res.status(200).send(data);
})

app.listen(3000);