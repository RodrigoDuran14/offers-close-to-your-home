const bcrypt = require("bcrypt");
const { Comercio } = require("../../db")

const createCommerce = async (id_ciudad, id_categoria_comercio,nombre_comercio, direccion, telefono, estado, nombre_contacto, cargo, password, email, imagen) => {

  if (password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    password = hashedPassword
  }


  const newCommerce = await Comercio.create({
    nombre_comercio,
    direccion,
    telefono,
    estado,
    nombre_contacto,
    cargo,
    password,
    email,
    imagen,
    id_ciudad,
    id_categoria_comercio
  });

  //const adCiudad = await Ciudad.findAll({where: {id_ciudad}});
  //const addCategoriaComercio = await Categoria_comercio.findAll({where: {id_categoria_comercio}});
//
  //await newCommerce.addCiudad(adCiudad);
  //await newCommerce.addCategoria_comercio(addCategoriaComercio)

  return newCommerce;
};
module.exports = { createCommerce };
