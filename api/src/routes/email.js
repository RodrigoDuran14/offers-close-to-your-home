const { Router } = require("express");
const router = Router();
const { getUserByEmailHandler } = require("../handlers/email/handlerGetEmail");


router.get("/", getUserByEmailHandler)

module.exports = router;