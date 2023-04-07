const axios = require("axios"); 
const { Producto} = require("../db");

class paymentService{
    async createPayment(idProducto){
        const url = "https://api.mercadopago.com/checkout/preferences"
      
        // Consultar la base de datos para obtener los detalles del producto correspondiente al ID proporcionado
        const producto = await Producto.findOne({ where: { id_producto: idProducto } });
        if (!producto) {
          throw new Error("Producto no encontrado");
        }
      
        // Modificar el cuerpo del pago para incluir los detalles del producto obtenidos de la base de datos
        const body = {
          payer_email:"test_user_1879813968@testuser.com",
          items:[
            {
              title: producto.nombre,
              description: producto.descripcion_producto,
              picture_url: producto.imagen,
              category_id: producto.id_categoria_producto,
              quantity: 1,
              unit_price: producto.valor_normal
            },{
                title: producto.nombre,
                description: producto.descripcion_producto,
                picture_url: producto.imagen,
                category_id: producto.id_categoria_producto,
                quantity: 1,
                unit_price: producto.valor_normal
              }
          ],
          back_urls:{
            failure: "/failure",
            pending: "/pending",
            success: "/success"
          }
        };
        
        const payment = await axios.post(url,body, {
          headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.ACCES_TOKEN}`
          }
        });
        return payment.data;
      }
      
  }

module.exports = paymentService