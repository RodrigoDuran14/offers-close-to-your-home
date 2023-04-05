const { Usuario } = require("../../db");
const { op } = require("sequelize");

const getAllUsers = async () => {
  try {
  const dataUser = await Usuario.finAll({
    attributes: [
      "id_tipo_usuario",
      "id_usuario",
      "primer_nombre",
      "segundo_nombre",
      "primer_apellido",
      "segundo_apellido",
      "direccion",
      "telefono",
      "id_ciudad",
      "estado",
      "email",
      "contraseña",
      "imagen",
    ],
  });
  const results = [...dataUser];
  return results;
} catch (error) {
  console.error(error);
}
};

const getUserById = async idUser => {
  try {
    const user = await Usuario.findByPk(idUser, {
      attributes: [
        "id_tipo_usuario",
        "id_usuario",
        "primer_nombre",
        "segundo_nombre",
        "primer_apellido",
        "segundo_apellido",
        "direccion",
        "telefono",
        "id_ciudad",
        "estado",
        "email",
        "contraseña",
        "imagen",
      ],
    });
    return user;
  } catch (error) {
    console.error(error);
  }
};

const getUserByName = async name => {
  try {
    const users = await Usuario.findAll({
      attributes: [
        "id_tipo_usuario",
        "id_usuario",
        "primer_nombre",
        "segundo_nombre",
        "primer_apellido",
        "segundo_apellido",
        "direccion",
        "telefono",
        "id_ciudad",
        "estado",
        "email",
        "contraseña",
        "imagen",
      ],
      where: { [op.or]: [
        { primer_nombre: name },
        { segundo_nombre: name },
        { primer_apellido: name },
        { segundo_apellido: name }
      ] },
    });
    return users;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getAllUsers, getUserById, getUserByName };
