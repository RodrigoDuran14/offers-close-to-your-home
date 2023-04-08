const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Comercio",
    {
      id_comercio: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      id_ciudad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Ciudad",
          key: "id_ciudad",
        },
      },
      nombre_comercio: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefono: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultVale: true,
      },
      nombre_contacto: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      cargo: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "Comercio",
      timestamps: false,
    }
  );
};
