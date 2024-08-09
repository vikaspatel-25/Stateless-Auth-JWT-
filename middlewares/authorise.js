const {verifyKey} = require("../services/authservice");


async function authoriseUser(req,res,next){
const token = req.cookies?.uid;
try {
    if(token){
    let result = verifyKey(token);
    let username = result.name;
    if(result){
       return res.render("home",{username})
    }
} 
} catch (error) {
    console.log(error);
    return res.json({err:"Something went wrong while verifying cookies"})
}
next();
}

module.exports = {authoriseUser};