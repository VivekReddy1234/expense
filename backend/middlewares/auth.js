const { getUser } = require("../service/auth");

const checkForAuth = (req, res, next) => {
    try {
        const token = req.cookies?.token;
        console.log(req.cookies);
        console.log(token);
        if (!token) {
          
            req.user = null;
            return next();
        }

        const user = getUser(token);
        console.log(user);
        if (user) {
           
            req.user = user;
        } else {
          
            req.user = null;
        }
    } catch (error) {
        console.error("Error during authentication:", error.message);
        req.user = null;
    }

    next();
};

module.exports = checkForAuth;
