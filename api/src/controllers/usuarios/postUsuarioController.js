const bcrypt = require("bcrypt");
const { Usuario, Tipo_usuario } = require("../../db");

const guardarTipoUsuario = async () => {
  try {
    let tipoUsuario = [
      { nombre_tipo_usuario: "Cliente" },
      { nombre_tipo_usuario: "Administrador" }
    ]
    let mapTipoUsuario = tipoUsuario.map((prop) => ({ nombre_tipo_usuario: prop.nombre_tipo_usuario }));
    await Tipo_usuario.bulkCreate(mapTipoUsuario);
    console.log('Se guardaron los tipos de usuarios correctamente');

  } catch (error) {

    console.error('Error al cargar los tipos de Usuarios', error);
  }

}

const verifyDb = async () => {
  const aux = await Tipo_usuario.count();
  if (aux < 1) await guardarTipoUsuario();
}


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

  verifyDb();
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
