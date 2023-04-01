const { Router } = require("express");
const {
  getAllProductsHandler,
  getProductByIdhandler,
} = require("../handlers/productos/getProductos");
const { postProductHandler } = require("../handlers/productos/postProductos");

const router = Router();

router.get("/", getAllProductsHandler);
router.get("/:idProduct", getProductByIdhandler);
router.post("/", postProductHandler);

module.exports = router;
