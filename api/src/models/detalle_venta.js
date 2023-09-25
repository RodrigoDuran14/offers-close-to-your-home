const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Detalle_venta", {
    id_detalle_venta: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_comercio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    valor_total_cantidad: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    valor_unitario: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    id_pago: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_venta: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
    {
      tableName: 'Detalle_venta',
      timestamps: false
    });
};