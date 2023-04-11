const { Router } = require("express");
const paymentService = require("../service/paymentService")
const paymentController = require("../controllers/paymentController/paymentController")
const paymentInstance = new paymentController(new paymentService())

const router = Router();

// Importar todos los routers, Ejemplo: const authRouter = require('./auth.js');
// Configurar los routers, Ejemplo: router.use('/auth', authRouter);

const productos = require("./producto");
router.use("/products", productos);

const allproducts = require("./allProducts");
router.use("/allProducts", allproducts);

const usuarios = require("./usuario");
router.use("/usuario", usuarios);

const categorias = require("./categorias");
router.use("/categorias", categorias);

const comercio = require("./comercio")
router.use("/commerce", comercio)

const categoriaComercio = require("./categoriaComercio")
router.use("/categoriaComercio", categoriaComercio)

const ciudades = require("./ciudad");
router.use("/ciudad", ciudades);

const venta = require("./venta");
router.use("/venta", venta)

router.get("/buy-product", function(req, res, next){
  const productId = req.query.producto_id;
  // Aquí deberías validar que el ID del producto sea válido antes de usarlo
  // para buscar el producto en la base de datos
  paymentInstance.getPymentLink(req, res, productId);
});

module.exports = router;

/*el enlace que devuelve tu API al cliente es el enlace de pago de Mercado Pago generado para la transacción.
 Para que el cliente pueda pagar, debe hacer clic en este enlace. Por lo tanto, lo más común es que se genere un botón
  en el frontend con una etiqueta de "Pagar" o algo similar y se vincule con este enlace de pago.

Puedes crear el botón en HTML y asignarle la URL que obtienes en la respuesta de tu API, de esta manera:

<button onclick="window.location.href='ENLACE_DE_PAGO'">Pagar</button>
Deberás reemplazar ENLACE_DE_PAGO por la URL que obtienes como respuesta en tu API. Al hacer clic en este botón,
 el cliente será redirigido al enlace de pago de Mercado Pago para completar la transacción.*/