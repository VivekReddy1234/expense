const jwt = require("jsonwebtoken");
const secret= "VivekReddy"; 
function generateToken(user){
    const payload={
        _id: user._id,
        name: user.userName,
        email: user.email,
    }
    console.log(payload,"username is ",user.userName);
   const token= jwt.sign(payload,secret);
   return token;
}


function getUser(token){
    const payload= jwt.verify(token,secret);
    return payload;
}

module.exports={
    generateToken,
    getUser,
}