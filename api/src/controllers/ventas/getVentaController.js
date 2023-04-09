const { Venta } = require("../../db");

const getVenta = async () => {
    // buscar en la bbd
    const databaseVenta = await Venta.findAll({
    });
  
    return databaseVenta;
  };

  module.exports = {
    getVenta
  };