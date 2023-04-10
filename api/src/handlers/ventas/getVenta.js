const { getVenta} = require("../../controllers/ventas/getVentaController")


const getAllVentasHandler = async (req, res, next) => {

    try {
        const results = await getVenta()

        res.status(200).json(results)

    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllVentasHandler
}