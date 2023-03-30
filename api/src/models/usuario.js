const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
sequelize.define('usuario', {
    id_tipo_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'tipo_usuario',
        key: 'id_tipo_usuario',
      },
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false, 
      autoIncrement: true,
      primaryKey: true,
    },
    nombre_usuario:{
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    direccion:{
      type: DataTypes.STRING,
      allowNull: false
    },
    telefono:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_ciudad:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: "ciudad",
        key: "id_ciudad"
      }
    },
    estado:{
      type: DataTypes.BOOLEAN
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    contraseña:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull:false
    }
  }, {
    timestamps: false,
  });
}