const bcrypt = require("bcrypt");
const { Usuario } = require("../../db");

const createUsuario = async (
  id_tipo_usuario,
  id_usuario,
  primer_nombre,
  segundo_nombre,
  primer_apellido,
  segundo_apellido,
  direccion,
  telefono,
  id_ciudad,
  estado,
  email,
  contraseña,
  imagen
) => {
  // Generar un salt para el hash
  const salt = await bcrypt.genSalt(10);

  // Encriptar la contraseña con el salt generado
  const hashedPassword = await bcrypt.hash(contraseña, salt);

  // Crear el usuario en la base de datos con la contraseña encriptada
  const newUser = await Usuario.create({
    id_tipo_usuario,
    id_usuario,
    primer_nombre,
    segundo_nombre,
    primer_apellido,
    segundo_apellido,
    direccion,
    telefono,
    id_ciudad,
    estado,
    email,
    contraseña: hashedPassword, // guardar la contraseña encriptada
    imagen,
  });

  return newUser;
};

module.exports = { createUsuario };
