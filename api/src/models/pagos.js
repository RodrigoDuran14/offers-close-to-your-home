const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pagos", {
    id_pago: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    valor_comision: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    valor_a_pagar: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    estado_del_pago: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    id_detalle_venta: {
      type: DataTypes.INTEGER,
      references: {
        model: "detalle_venta",
        key: "id_detalle_venta",
      },
    },
  });
};
