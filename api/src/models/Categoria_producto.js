const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Categoria_producto', {
    id_categoria_producto: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre_categoria_producto: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    imagen_categoria_producto: {
      type: DataTypes.STRING(),
      allowNull: false,
      unique: true,
    },
    
  }, {
    tableName: 'Categoria_producto',
    timestamps: false,
  });
}  