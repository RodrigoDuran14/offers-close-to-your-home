const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const paymentService = require("../service/paymentService")
const paymentController = require("../controllers/paymentController/paymentController")
const paymentInstance = new paymentController(new paymentService())

const productos = require("./producto");

const allproducts = require("./allProducts");

const usuarios = require("./usuario");

const categorias = require("./categorias");

const comercio = require("./comercio")

const categoriaComercio = require("./categoriaComercio")

const ciudades = require("./ciudad");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/products", productos);

router.use("/allProducts", allproducts);

router.use("/usuario", usuarios);

router.use("/categorias", categorias);

router.use("/commerce", comercio)

router.use("/categoriaComercio", categoriaComercio)

router.get("/productos", function(req, res, next){
    const productId = req.query.producto_id;
    // Aquí deberías validar que el ID del producto sea válido antes de usarlo
    // para buscar el producto en la base de datos
    paymentInstance.getPymentLink(req, res, productId);
  });

router.use("/ciudad", ciudades);


module.exports = router;

/*e l enlace que devuelve tu API al cliente es el enlace de pago de Mercado Pago generado para la transacción.
 Para que el cliente pueda pagar, debe hacer clic en este enlace. Por lo tanto, lo más común es que se genere un botón
  en el frontend con una etiqueta de "Pagar" o algo similar y se vincule con este enlace de pago.

Puedes crear el botón en HTML y asignarle la URL que obtienes en la respuesta de tu API, de esta manera:

<button onclick="window.location.href='ENLACE_DE_PAGO'">Pagar</button>
Deberás reemplazar ENLACE_DE_PAGO por la URL que obtienes como respuesta en tu API. Al hacer clic en este botón,
 el cliente será redirigido al enlace de pago de Mercado Pago para completar la transacción.*/