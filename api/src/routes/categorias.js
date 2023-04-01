const { Router } = require("express");
const temperamentRouter = Router();
const { getCategoriasHandler} = require("../handlers/productos/getProductos")

temperamentRouter.get("/", getCategoriasHandler)

module.exports = temperamentRouter;