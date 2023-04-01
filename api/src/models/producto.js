const { DataTypes, DATE } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Producto", {
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    id_comercio: {
      type: DataTypes.INTEGER,
      references: {
        model: "Comercio",
        key: "id_comercio",
      },
    },
    nombre:{
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    fecha_inicial: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    fecha_final: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    descripcion_producto: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    existencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    valor_normal: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    valor_con_descuento: {
      type: DataTypes.FLOAT,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull:false
    },
    condicion: {
        type: DataTypes.ENUM("Nuevo", "Usado", "Reacondicionado"),
        allowNull: false
    },
  },
  {
    tableName: 'Producto',
    timestamps: false 
});
};
