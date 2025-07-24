const express = require("express");
const { products } = require("../controller/products.controller");
const { auth } = require("../middlewares/auth.middleware");

const productsRoute = express.Router();

productsRoute.get("/products", auth,products);



module.exports={
  productsRoute
}