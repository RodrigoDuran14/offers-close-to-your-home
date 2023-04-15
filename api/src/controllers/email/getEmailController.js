const { Usuario, Tipo_usuario, Ciudad } = require("../../db");
const { Op, Sequelize } = require("sequelize");

const getAllUsersEmail = async () => {
  try {
    const dataUser = await Usuario.findAll({
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
        "password",
        "imagen"
      ],
      include: [
        {
          model: Tipo_usuario,
          attributes: ["nombre_tipo_usuario"]
        },
        {
          model: Ciudad,
          attributes: ["nombre_ciudad"]
        },
      ]
    });
    const results = [...dataUser];
    return results;
  } catch (error) {
    console.error(error);
  }
};

const getUserByEmail = async (email) => {
  try {
    const users = await Usuario.findAll({
      where: {
        email: { [Op.regexp]: `^${email}$` } // Utiliza una expresión regular para buscar el correo exacto
      },
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
        "password",
        "imagen"
      ],
      include: [
        {
          model: Tipo_usuario,
          attributes: ["nombre_tipo_usuario"]
        },
        {
          model: Ciudad,
          attributes: ["nombre_ciudad"]
        }
      ],
    });
    return users;
  } catch (error) {
    console.error(error);
  }
};


// const getUserByEmail = async email => {
//     try {
//       const users = await Usuario.findAll({
//         attributes: [
//           "id_tipo_usuario",
//           "id_usuario",
//           "primer_nombre",
//           "segundo_nombre",
//           "primer_apellido",
//           "segundo_apellido",
//           "direccion",
//           "telefono",
//           "id_ciudad",
//           "estado",
//           "email",
//           "password",
//           "imagen"
//         ],
//         include: [
//           {
//             model: Tipo_usuario,
//             attributes: ["nombre_tipo_usuario"]
//           },
//           {
//             model: Ciudad,
//             attributes: ["nombre_ciudad"]
//           },
//         ],
//         where: {
//           email: { [Op.regexp]: `^${email}$` } 
//         }
//       });
//       return users;
//     } catch (error) {
//       console.error(error);
//     }
//   };


  module.exports = { getUserByEmail , getAllUsersEmail };