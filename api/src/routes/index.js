const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const productos = require("./producto");
const usuarios = require("./usuario");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/products", productos)
router.use("/usuario", usuarios)

module.exports = router;
