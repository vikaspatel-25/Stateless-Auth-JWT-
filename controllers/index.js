const User = require("../models/users");
require("body-parser");
const {signKey} = require("../services/authservice")

async function handleLogin(req,res){
const {email,password} = req.body;
try {
    user = await User.findOne({email,password})
    if(user){
        const token = await signKey(user);
        res.cookie("uid",token);
        console.log("login successfull")
        return res.json({success:"Login Successful"})
    }
    if(!user){
        return res.json({msg:"Invalid Mail or Password"})
    }
    console.log(user)
} catch (error) {
    console.log(error);
    return res.json({err:"Error occured while trying to login"})
}
}

async function handleSignup(req,res){
const { name,email,password } = req.body

let valid = await User.findOne({email})
if(valid){
    return res.json({invalidmail:"User with this email already exists"})
}
try {
   await User.create({
    name,
    email,
    password,
   })
   console.log("User Created");
   return res.json({success:"Registration Successful"})
} catch (error) {
    console.log(error);
    return res.json({err:"Some error occured while registering"})
}
}

module.exports = {handleLogin,handleSignup};