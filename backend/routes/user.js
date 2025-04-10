const express =require("express");
const login = require("../controllers/login");
const signup = require("../controllers/signup");

const router= express.Router();

router.post("/login",login);
router.post('/signup',signup);
router.get('/logout',(req,res)=>{
    res.clearCookie('token');
    console.log("cleared cookie");
    res.status(200).json({msg:"Cookie delted successfully"});
})


module.exports=router;