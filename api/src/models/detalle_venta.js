const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("detalle_venta", {
    id_detalle_venta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    valor_parcial_venta: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    id_producto: {
      type: DataTypes.INTEGER,
      references: {
        model: "producto",
        key: "id_producto",
      },
    },
    id_venta: {
      type: DataTypes.INTEGER,
      references: {
        model: "venta",
        key: "id_venta",
      },
    },
  });
};
