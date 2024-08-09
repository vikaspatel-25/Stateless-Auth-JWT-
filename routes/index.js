const express = require("express");
const router = express.Router();
const {handleLogin,handleSignup} = require("../controllers/index");
const {authoriseUser} = require("../middlewares/authorise")

router.route("/")
.get((req,res)=>{return res.redirect("/login")})

router.route("/login")
.get((req,res)=>{return res.render("login")})
.post(handleLogin)

router.route("/signup")
.get((req,res)=>{ return res.render("signup")})
.post(handleSignup)

router.route("/home")
.get((req,res)=>{ return res.redirect("/login")})


module.exports = router;
