const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Venta', {
    id_venta: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    valor_total_venta: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
    {
      tableName: 'Venta',
      timestamps: false
    });
}