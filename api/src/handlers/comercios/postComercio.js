const { createCommerce } = require("../../controllers/comercios/postComercioController");
const { searchNameCommerce, searchEmailCommerce } = require("../../controllers/comercios/getComercioController");
const { validacionPostComercio } = require("../validaciones/validacionComercio");

const postCommerceHandler = async (req, res) => {
  const {
    id_categoria_comercio,
    id_ciudad,
    nombre_comercio,
    direccion,
    telefono,
    estado,
    nombre_contacto,
    cargo,
    password,
    email,
    imagen,
  } = req.body;

  try {
    //validacionPostComercio(req.body);

  const [resultSearchName, resultSearchEmail] = await Promise.all([
    searchNameCommerce(nombre_comercio),
    searchEmailCommerce(email),
  ]);
  if (resultSearchEmail === null && resultSearchName === null) {
      const newCommerce = await createCommerce(
        id_categoria_comercio,
        id_ciudad,
        nombre_comercio,
        direccion,
        telefono,
        estado,
        nombre_contacto,
        cargo,
        password,
        email,
        imagen
      );
      res.status(200).json(newCommerce);
    } else if (resultSearchEmail !== null) {
      res.status(300).send({ data: "ya existe un camercio con ese email" });
    } else {
      res.status(300).send({ data: "ya existe un camercio con ese nambre" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  postCommerceHandler,
};

