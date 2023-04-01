const {Producto} = require("../../db")


const createProduct = async (nombre, fecha_inicial, fecha_final, descripcion_producto, cantidad, existencia, valor, imagen, id_categoria_producto) => {
  const newProduct = await Producto.create({nombre, fecha_inicial, fecha_final, descripcion_producto, cantidad, existencia, valor, imagen, id_categoria_producto});
  return newProduct;
};

module.exports = { createProduct };
