const User = require("../models/user.js");
const {generateToken} = require("../service/auth.js");

async function signup(req, res) {
    try {
        if (!req.body) return res.status(401).json({ 'msg': "No details found" });

        const { userName, email, password } = req.body;
        if (!userName || !email || !password) return res.status(401).json({ "msg": "Incomplete details" });

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(401).json({ 'msg': "User already exists" });

        const newUser = await User.create({ userName, email, password });

        // Generate token using the generateToken function
        const token = generateToken(newUser);

        // Set the token as a cookie
        res.cookie("token", token, { httpOnly: true, secure: true, maxAge: 3600000 });
        return res.status(201).json({ 'msg': "Signup successful" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ 'msg': "Server error" });
    }
}

module.exports = signup;
