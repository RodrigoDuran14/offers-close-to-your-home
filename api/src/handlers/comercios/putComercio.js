const {
  editCommerce,
  editPassword,
} = require("../../controllers/comercios/putComercioController");
const {
  getCommerceId,
} = require("../../controllers/comercios/getComercioController");

const putCommerceHandler = async (req, res, next) => {
  const {
    id_comercio,
    id_categoria_comercio,
    id_ciudad,
    nombre_comercio,
    direccion,
    telefono,
    estado,
    nombre_contacto,
    cargo,
    email,
    password,
    newPassword,
    imagen,
  } = req.body;

  try {
    password
      ? await editPassword(password, newPassword, id_comercio) 
      : await editCommerce(
          id_comercio,
          id_categoria_comercio,
          id_ciudad,
          nombre_comercio,
          direccion,
          telefono,
          estado,
          nombre_contacto,
          cargo,
          email,
          password,
          imagen
        );

    const results = await getCommerceId(id_comercio);

    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  putCommerceHandler,
};
