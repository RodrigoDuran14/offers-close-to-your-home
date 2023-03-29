const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('comercio', {
    id_comercio : {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },

    id_categoria_comercio : {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references:{
        model: "categoria_comercio",
        key:"id_categoria_comercio"
      }
    },

    nombre_comercio : {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
      },

      direccion : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      telefono : {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },

      id_ciudad : {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references:{
            model: "ciudad",
            key:"id_ciudad"
          }
      },

      estado : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: true,
      },

      nombre_contacto : {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      
      cargo : {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
      },
      
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

  });
};
