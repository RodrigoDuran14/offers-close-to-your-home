const { Router } = require("express");
const { getAllProductsHandler, getProductByIdhandler, } = require("../handlers/productos/getProductos");
const { postProductHandler } = require("../handlers/productos/postProductos");
const { crearCalificacion, obtenerCalificaciones } = require("../controllers/motivoCalificacion/motivoCalificacionController")
const { putProductHandler } = require('../handlers/productos/putProduct')

const router = Router();

router.get("/", getAllProductsHandler);
router.get("/:idProduct", getProductByIdhandler);
router.post("/", postProductHandler);
router.post("/:idProduct/calificacion", crearCalificacion)
router.get('/:idProduct/calificaciones', obtenerCalificaciones);
router.put('/', putProductHandler)

module.exports = router;

//aguante fnatic