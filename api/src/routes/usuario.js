const { Router } = require("express");
const router = Router();
const { postUserHandler } = require("../handlers/usuarios/postUsuariosHandler");
const { getAllUsersHandler, getUserByIdHandler, getUserByEmailHandler } = require("../handlers/usuarios/getUsuariosHandler");
const { loginHandler } = require("../handlers/usuarios/loginHandler");

router.get("/", getAllUsersHandler)
router.get("/:idUser", getUserByIdHandler)
router.get("/email", getUserByEmailHandler)
router.post("/", postUserHandler)
router.post('/login', loginHandler)


module.exports = router;