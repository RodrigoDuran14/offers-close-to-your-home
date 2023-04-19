const { Producto } = require("../../db");



const putProductController = async (producto) => {

    try {
        if (!producto || Object.keys(producto).length === 0) {
            throw new Error('No se proporcionó nueva cantidad de stock para actualización')
        } else {

            console.log('CONTROLLER', producto)

            for (let i = 0; i < producto.length; i++) {
                Producto.update(
                    {
                        existencia: producto[i].cantidad
                    },
                    {
                        where: { id_producto: producto[i].id_producto }
                    }
                )                
            }
            

            // const actualizado = await Producto.update(
            //     {
            //         existencia: producto.cantidad
            //     },
            //     {
            //         where: { id_producto: producto.id_producto }
            //     }
            // )

            // return actualizado

            // arrayStock.forEach( async (producto) => {
            //     await Producto.update(
            //         {
            //             existencia: producto.cantidad
            //         },
            //         {
            //             where: { id_producto: producto.id_producto }
            //         }
            //     );
            // });

            // return 'Modificado con éxito'
        }
    } catch (error) {
        return error
    }
}

module.exports = { putProductController }