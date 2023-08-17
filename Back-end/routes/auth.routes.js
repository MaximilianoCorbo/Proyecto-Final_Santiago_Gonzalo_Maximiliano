const express = require("express");
const authroutes = express.Router();
const check = require("../validators/user/user-validator");
const mensaje = require("../validators/mensaje");
const { login, register } = require("../controller/auth.controller");

//Login
authroutes.post("/login", login);
//register
authroutes.post("/register", check, mensaje, register);

module.exports = authroutes;
