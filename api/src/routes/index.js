const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
 carolina
const productos = require("./producto");
const usuarios = require("./usuario");


const productos = require("./producto")
const categorias = require("./categorias")
 develop
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/products", productos)
 carolina
router.use("/usuario", usuarios)

router.use("/categorias", categorias)
 develop

module.exports = router;
