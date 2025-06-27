const mongoose = require("mongoose");

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        res.status(200).json({status: 200, message: "Connected to database"});
    } catch (e) {
        console.error("Database connection error:", e);
        res.status(400).json({status: 400, message: "Error connecting to database", error: e.message});
    }
}
