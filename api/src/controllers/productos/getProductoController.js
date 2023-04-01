
const {Producto, Comercio, Categoria_producto} = require("../../db")
const axios = require("axios")
const { Op } = require("sequelize");

const getAllProducts = async () => {
  // buscar en la bbd
  const databaseProducts = await Producto.findAll({
    attributes: [
      "id_producto",
      "fecha_inicial",
      "fecha_final",
      "descripcion_producto",
      "cantidad",
      "existencia",
      "valor_normal",
      "valor_con_descuento",
      "condicion",
      "estado",
      "imagen",
      "nombre",
    ],
    include: {
      model: Categoria_producto,
      attributes: ["nombre_categoria_producto"],
      required: true
    }
  });

  const apiProductsRaw = (await axios.get("https://fakestoreapi.com/products")).data;
  const apiP = cleanArray(apiProductsRaw);
  const results = [...databaseProducts, ...apiP];
  return results;
}


  // buscar en la api
  const apiProductsRaw = (
    await axios.get("https://fakestoreapi.com/products")).data;
  const apiP = cleanArray(apiProductsRaw);
  const results = [...databaseProducts, ...apiP];
  return results;
};


const searchProductByName = async (nombre) => {
  const [databaseProducts, apiProductsRaw] = await Promise.all([
    Producto.findAll({
      where: {
        nombre: {
          [Op.iLike]: `%${nombre}%`,
        },
      },
    }),
    axios.get("https://fakestoreapi.com/products"),
  ]);
  const apiP = cleanArray(apiProductsRaw.data);
  const filterApi = apiP.filter((Producto) =>
    Producto.nombre.toLowerCase().includes(nombre.toLowerCase())
  );

  return [...filterApi, ...databaseProducts];
};

const cleanArray = (arr) => {
  return arr.map((elem) => {
    return {
      id_producto: elem.id,
      nombre: elem.title,
      valor_normal: elem.price,
      valor_con_descuento: elem.price,
      estado: elem.true,
      imagen: elem.image,
    };
  });
};

const getProductById = async (idProduct) => {
  let ProductInfo = [];
  let Productdb = [];

  const apiData = await axios.get(
    `https://fakestoreapi.com/products/${idProduct}`);
  ProductInfo = {
    id_producto: apiData.data.id,
    nombre: apiData.data.title,
    descripcion_producto: apiData.data.description,
    valor_normal: apiData.data.price,
    valor_con_descuento: apiData.data.price,
    estado: apiData.data.true,
    imagen: apiData.data.image,
  };

  //buscar por id de la db
  const dbdata = await Producto.findByPk(idProduct)

    Productdb = {
    id_producto: dbdata.id_producto,
    nombre: dbdata.nombre,
    fecha_inicial: dbdata.fecha_inicial,
    fecha_final: dbdata.fecha_final,
    descripcion_producto: dbdata.descripcion_producto,
    cantidad: dbdata.cantidad,
    existencia: dbdata.existencia,
    valor_normal: dbdata.valor_normal,
    valor_con_descuento: dbdata.valor_con_descuento,
    imagen: dbdata.imagen,
    condicion: dbdata.condicion,
    estado: dbdata.estado,
  }           
   
    return [Productdb, ProductInfo];
  };

  const getAllCategorias = async () => {
    let categorias = ["indumentaria", "electrodomesticos", "informatica", "supermercado"];
    let categoriasGuardadas = [];
  
    for (let i = 0; i < categorias.length; i++) {
      const categoria = { nombre_categoria_producto: categorias[i] };
      const categoriaGuardada = await Categoria_producto.create(categoria);
      categoriasGuardadas.push(categoriaGuardada);
    }
  
    return categoriasGuardadas;
  };
  
  module.exports = { getAllProducts,searchProductByName, getProductById,getAllCategorias};
