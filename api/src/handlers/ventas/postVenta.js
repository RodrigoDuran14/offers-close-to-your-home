const { createVenta, createDetalleVenta, } = require("../../controllers/ventas/postVentaController");

const postVentaHandler = async (req, res) => {

    const {
        fecha,
        valor_total_venta,
        id_usuario,
        detalle_venta
    } = req.body;
    console.log(1, req.body)
    try {
        const newVenta = await createVenta(
            fecha,
            valor_total_venta,
            id_usuario
        );
        const resultVenta = await createDetalleVenta(
            detalle_venta,
            newVenta.id_venta
        )
        res.status(200).json(resultVenta);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    postVentaHandler,
};