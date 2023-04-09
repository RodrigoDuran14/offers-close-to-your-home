const { Router } = require("express");
const { getAllVentasHandler} = require("../handlers/ventas/getVenta")
const { postVentaHandler } = require("../handlers/ventas/postVenta")

const router = Router();

router.get("/", getAllVentasHandler)
router.post("/", postVentaHandler)
module.exports = router;