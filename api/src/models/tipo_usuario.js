const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Tipo_usuario', {
      id_tipo_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
          },
    nombre_tipo_usuario: {
      type: DataTypes.STRING(50), 
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: 'Tipo_usuario',
    timestamps: false 
});
};

