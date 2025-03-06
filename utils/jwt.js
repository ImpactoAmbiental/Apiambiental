const jsonwebtoken = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../constant");

function createAccessToken(user) {
    const expToken = new Date();
    expToken.setHours(expToken.getHours() + 24);

    const payload = {
        token: "access",
        user_id: user._id,
        iat: Date.now(),
        exp: expToken.getTime(),
    };
    
    return jsonwebtoken.sign(payload, JWT_SECRET_KEY);
}

// Exportamos como CommonJS
module.exports = {
    createAccessToken
};
