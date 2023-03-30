const {Router} = require("express");

const router = Router();

router.get("/", (req, res) =>{
  res.send("get productos")
})

module.exports = router;