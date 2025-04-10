const User = require("../models/user.js");
const {generateToken}= require("../service/auth.js");

async function login(req, res) {
    try {
        if (!req.body) return res.status(401).json({ 'msg': "No details found" });

        const { email, password } = req.body;
        if (!email || !password) return res.status(401).json({ "msg": "No credentials" });

        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ 'msg': "User not found" });

        // Match password and generate token
        const token = await User.matchPassword(user, password);
        if (!token) return res.status(401).json({ 'msg': "Invalid password" });

        // Set the token as a cookie
        res.cookie("token", token);
        return res.status(200).json({ 'msg': "Login successful" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ 'msg': "Server error" });
    }
}

module.exports = login;
