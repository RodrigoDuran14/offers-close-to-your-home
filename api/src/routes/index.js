const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const productos = require("./producto");

const usuarios = require("./usuario");

const categorias = require("./categorias");

const comercio = require("./comercio")

const categoriaComercio = require("./categoriaComercio")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/products", productos);

router.use("/usuario", usuarios);

router.use("/categorias", categorias);

router.use("/commerce", comercio)

router.use("/categoriaComercio", categoriaComercio)


module.exports = router;
