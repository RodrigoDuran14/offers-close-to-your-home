const {createProduct} = require("../../controllers/productos/postProductoController")


const postProductHandler = async (req,res)=>{
    const { nombre, fecha_inicial, fecha_final, descripcion_producto, cantidad,existencia, valor, imagen } = req.body
    try {
      const newProduct = await createProduct( nombre, fecha_inicial, fecha_final, descripcion_producto, cantidad,existencia, valor, imagen)
       res.status(200).json(newProduct)
    
    } catch (error) {
      res.status(400).json({ error: error.message})
    }
    
    }
    module.exports= {
        postProductHandler
    }