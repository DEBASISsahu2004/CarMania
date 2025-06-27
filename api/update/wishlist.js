const mongoose = require("mongoose");
const User = require("../../public/users.js");

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
        
        const { username, item } = req.body;
        const user = await User.findOne({username: username});
        
        if (user) {
            user.wishlist.push(item);
            await user.save();
            res.status(200).json({status: 200, message: "Wishlist updated"});
        } else {
            res.status(404).json({status: 404, message: "User not found"});
        }
        
    } catch (e) {
        console.error("Wishlist update error:", e);
        res.status(400).json({status: 400, message: "Error updating wishlist", error: e.message});
    }
}
