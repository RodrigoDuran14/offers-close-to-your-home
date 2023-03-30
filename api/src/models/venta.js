const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
sequelize.define('venta', {
    id_venta: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  fecha: {
    type: DataTypes.DATE, 
    allowNull: false,
  },    
  valor_total_venta:{
    type: DataTypes.FLOAT, 
        allowNull: false,
  },
   id_usuario:{
    type: DataTypes.INTEGER,
    allowNull:false,
    references:{
      model: "usuario",
      key: "id_usuario"
    }
    
   }
  });
}