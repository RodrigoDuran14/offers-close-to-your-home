const {Router} = require("express");
const router = Router();
const {postUserHandler} = require("../handlers/usuarios/postUsuariosHandler");
const {getAllUsersHandler,getUserByIdHandler} = require("../handlers/usuarios/getUsuariosHandler");

router.get("/",getAllUsersHandler)
router.get("/:idUser", getUserByIdHandler)
router.post("/",postUserHandler)


module.exports = router;