const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('categoria_comercio', {
    id_categoria_comercio : {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nombre_categoria_comercio  : {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
  });
};
