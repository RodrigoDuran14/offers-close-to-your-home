const {createProduct} = require("../../controllers/productos/postProductoController")


const postProductHandler = async (req, res) => {
  const { nombre, fecha_inicial, fecha_final, descripcion_producto, cantidad, existencia, valor, imagen, id_categoria_producto } = req.body;
  try {
    const newProduct = await createProduct(nombre, fecha_inicial, fecha_final, descripcion_producto, cantidad, existencia, valor, imagen, id_categoria_producto);
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postProductHandler };
