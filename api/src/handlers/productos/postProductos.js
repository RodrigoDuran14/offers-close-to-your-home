const {createProduct} = require("../../controllers/productos/postProductoController")
const { validacionPostProducto } = require("../validaciones/validacionproducto")


const postProductHandler = async (req,res,next)=>{
    const { nombre, fecha_inicial, fecha_final, descripcion_producto, cantidad,existencia, valor, imagen } = req.body

    
    try {
      validacionPostProducto(req.body);
      const newProduct = await createProduct( nombre, fecha_inicial, fecha_final, descripcion_producto, cantidad,existencia, valor, imagen)
      res.status(200).json(newProduct)
    
    } catch (error) {
      next(error)
    }
    
    }
    module.exports= {
        postProductHandler
    }