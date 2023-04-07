const { Router } = require("express");
const {
  getAllProductsHandler,
  getProductByIdhandler,
} = require("../handlers/productos/getProductos");
const { postProductHandler } = require("../handlers/productos/postProductos");
const {crearCalificacion} = require("../controllers/motivoCalificacion/motivoCalificacionController")

const router = Router();

router.get("/", getAllProductsHandler);
router.get("/:idProduct", getProductByIdhandler);
router.post("/", postProductHandler);
router.post("/:idProduct/calificacion", crearCalificacion)
module.exports = router;
