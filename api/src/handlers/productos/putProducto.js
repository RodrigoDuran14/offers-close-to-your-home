const {getProductById} = require("../../controllers/productos/getProductoController")
const {editProduct} = require ("../../controllers/productos/putProductsController")

const putProductoHandler = async (req, res, next) => {
    const { id_comercio,
        id_producto, 
         nombre,
        cantidad,
        descripcion_producto,
        existencia,
        fecha_final,
        fecha_inicial,
        imagen,
        id_categoria_producto,
        valor_normal,
        valor_con_descuento,
        condicion, } = req.body

    try {
        await editProduct( nombre,
            id_producto,
            id_comercio,
            cantidad,
            descripcion_producto,
            existencia,
            fecha_final,
            fecha_inicial,
            imagen,
            id_categoria_producto,
            valor_normal,
            valor_con_descuento,
            condicion,)
        const results = await getProductById(id_producto)

        res.status(200).json(results)

    } catch (error) {
        next(error)
    }
}

module.exports = {
    putProductoHandler
}