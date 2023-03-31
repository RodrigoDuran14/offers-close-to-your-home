const {searchProductByName, getAllProducts, getProductById} = require("../../controllers/productos/getProductoController")


const getAllProductsHandler = async (req, res, next)=>{
    const {name} = req.query;
    try {
      const results = name ? await searchProductByName(name) : await getAllProducts()
    
    res.status(200).json(results)
    } catch (error) {
      next(error)
    }
    
    }

 const getProductByIdhandler = async (req,res,next)=>{
    const {idProduct} = req.params
    try {
        const ProductId = await getProductById(idProduct)
        res.status(200).json(ProductId)
    } catch (error) {
       next(error)  
    }
 }
module.exports ={
    getAllProductsHandler,
    getProductByIdhandler
}