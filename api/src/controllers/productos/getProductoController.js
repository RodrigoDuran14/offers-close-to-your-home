const {Producto, Comercio} = require("../../db")
const axios = require("axios")
const { Op } = require("sequelize");


const getAllProducts = async () => { 
    // buscar en la bbd
    const databaseProducts = await Producto.findAll({
      attributes: ["id_producto","fecha_inicial","fecha_final","descripcion_producto","cantidad","existencia","valor","estado","imagen","nombre"],
    
    });
  
    // buscar en la api
    const apiProductsRaw = (await axios.get("https://fakestoreapi.com/products", {
    })).data;
    const apiP = cleanArray(apiProductsRaw)
    const results = [...databaseProducts, ...apiP];
    return results;
  }

  const searchProductByName = async (nombre) => {
    const [databaseProducts, apiProductsRaw] = await Promise.all([
      Producto.findAll({
        where: {
          nombre: {
            [Op.iLike]: `%${nombre}%`,
          },
        },
        
      }),
      axios.get('https://fakestoreapi.com/products', {
     
      }),
    ]);
      const apiP = cleanArray(apiProductsRaw.data)
    const filterApi = apiP.filter((Producto) => Producto.nombre.toLowerCase().includes(nombre.toLowerCase()));
  
    return [...filterApi, ...databaseProducts];
  };

  const cleanArray = (arr)=>{
    return arr.map((elem)=>{
      return {
        id_producto: elem.id,
        nombre: elem.title,
        valor: elem.price,
        estado: elem.true,
        imagen: elem.image,
      }
    });
  }

  const getProductById = async (idProduct) => {
    let ProductInfo = {};
     
      const apiData = await axios.get(`https://fakestoreapi.com/products/${idProduct}`, {
      });
     ProductInfo = {
        id_producto: apiData.data.id,
        nombre: apiData.data.title,
        descripcion_producto: apiData.data.description,
        valor: apiData.data.price,
        estado: apiData.data.true,
        imagen: apiData.data.image,
     }
            
   
    return ProductInfo;
  };
  
  
  module.exports = { getAllProducts,searchProductByName, getProductById };
