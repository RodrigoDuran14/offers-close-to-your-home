const { Router } = require("express");
const { getAllCommerceHandler, getByNameHandler, getByEmailHandler, getByIdHandler, loginCommerce } = require("../handlers/comercios/getComercio")
const { postCommerceHandler } = require("../handlers/comercios/postComercio.js")
const { putCommerceHandler } = require("../handlers/comercios/putComercio")

const router = Router();

router.get("/", getAllCommerceHandler)
router.get("/byName", getByNameHandler)
router.get("/byEmail", getByEmailHandler)
router.get("/byId", getByIdHandler)
router.get("/login", loginCommerce)
router.post("/", postCommerceHandler)
router.put("/", putCommerceHandler)
module.exports = router;