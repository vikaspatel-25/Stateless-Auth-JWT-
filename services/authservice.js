const jwt = require("jsonwebtoken");
require("dotenv");
const jwt_key = process.env.JWT_KEY;

function signKey(user){
 const payload = {
    name: user.name,
    email: user.email,
    role: "Normal"
 }
 return jwt.sign(payload,jwt_key);
}

function verifyKey(token){

    try {
    let payload = jwt.verify(token,jwt_key);
    return payload;
    } catch (error) {
    return error;
    }
   
}

module.exports = { signKey ,verifyKey}