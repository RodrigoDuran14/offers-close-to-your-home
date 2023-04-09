const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Detalle_venta", {
    id_detalle_venta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
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
    id_venta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Venta",
        key: "id_venta",
      },
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Producto",
        key: "id_producto",
      },
    },
    
  },
  {
    tableName: 'Detalle_venta',
    timestamps: false 
});
};
