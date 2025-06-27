const mongoose = require("mongoose");
const Merch = require("../../public/merch.js");

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
        const merchandise = await Merch.find({});
        res.status(200).json(merchandise);
    } catch (e) {
        console.error("Merchandise fetch error:", e);
        res.status(400).json({message: "Error fetching merchandise", error: e.message});
    }
}
