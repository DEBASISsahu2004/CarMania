const mongoose = require("mongoose");
const User = require("../public/users.js");

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        
        const { username, password, email } = req.body;
        
        if (await User.findOne({username: username})) {
            return res.status(404).json({status: 404, message: "User already exists"});
        }
        
        const user = new User({
            username: username,
            password: password,
            email: email,
            wishlist: [],
            cart: []
        });
        
        await user.save();
        res.status(200).json({status: 200, message: "User registered successfully"});
        
    } catch (e) {
        console.error("Signup error:", e);
        res.status(400).json({status: 400, message: "Some error occurred", error: e.message});
    }
}
