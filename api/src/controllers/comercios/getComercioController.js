const { Comercio, Ciudad, Categoria_comercio } = require("../../db");
const { compareSync } = require("bcrypt");

const getCommerce = async () => {
  // buscar todas en la bd
  const databaseCommerce = await Comercio.findAll({
    attributes: [
      "id_comercio",
      "nombre_comercio",
      "direccion",
      "telefono",
      "estado",
      "nombre_contacto",
      "cargo",
      "password",
      "email",
      "imagen",
    ],
    include: [{
      model: Ciudad,
      attributes: ["nombre_ciudad"]
    },
    {model: Categoria_comercio,
    attributes: ["nombre_categoria_comercio"]}]
  });

  return databaseCommerce;
};

const getOneCommerce = async (email, password) => {
  // buscar una en la bd
  const databaseCommerce = await Comercio.findOne({
    where: {
      email: email,
    },
  });

  if (databaseCommerce !== null) {
    const validacionPassword = compareSync(password, databaseCommerce.password);
    if (validacionPassword === true) {
      return databaseCommerce;
    } else {
      return null;
    }
  }
};

const getCommerceId = async (id_comercio) => {
  const databaseCommerce = await Comercio.findOne({
    where: {
      id_comercio,
    },
  });

  const results = databaseCommerce;
  return results;
};

const searchEmailCommerce = async (email) => {
  const oneMail = await Comercio.findOne({
    where: {
      email,
    },
  });
  return oneMail;
};

const searchNameCommerce = async (nombre_comercio) => {
  const oneName = await Comercio.findOne({
    where: {
      nombre_comercio,
    },
  });
  return oneName;
};

module.exports = {
  getCommerce,
  getOneCommerce,
  getCommerceId,
  searchNameCommerce,
  searchEmailCommerce,
};
