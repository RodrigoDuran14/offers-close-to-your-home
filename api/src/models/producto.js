const { DataTypes, DATE } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("producto", {
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    id_comercio: {
      type: DataTypes.INTEGER,
      references: {
        model: "comercio",
        key: "id_comercio",
      },
    },
    fecha_inicial: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fecha_final: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    descripcion_producto: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    existencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    valor: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};
