const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Motivo_calificacion", {
    id_motivo_calificacion: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    descripcion_motivo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    valor_calificacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_producto: {
      type: DataTypes.INTEGER,
      references: {
        model: "Producto",
        key: "id_producto",
      },
    },
  });
};
