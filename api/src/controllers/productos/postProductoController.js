const {Producto} = require("../../db")



const createProduct = async (nombre, fecha_inicial, fecha_final, descripcion_producto, cantidad,existencia, valor, imagen) => {
  
    const newProduct = await Producto.create({nombre, fecha_inicial, fecha_final, descripcion_producto, cantidad,existencia, valor, imagen});

    return newProduct;
  };
  module.exports = { createProduct };