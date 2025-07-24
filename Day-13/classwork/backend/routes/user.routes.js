const express = require("express");
const {userSignup, Userlogin} = require("../controller/user.controller")

const userRoute = express.Router();

userRoute.post("/signup", userSignup);

userRoute.post("/login", Userlogin);

module.exports={
    userRoute
}