const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('Usuario',
    {
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      primer_nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      segundo_nombre: {
        type: DataTypes.STRING(50),
      },
      primer_apellido: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      segundo_apellido: {
        type: DataTypes.STRING(50),
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      telefono: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },

      estado: {
        type: DataTypes.BOOLEAN
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING,
      }
    },
    {
      tableName: 'Usuario',
      timestamps: false 
  });
  
};
