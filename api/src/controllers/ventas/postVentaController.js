const { Venta, Detalle_venta } = require("../../db");


const createVenta = async (fecha, valor_total_venta, id_usuario) => {
  console.log(2)
  const newVenta = await Venta.create({
    fecha,
    valor_total_venta,
    id_usuario
  });
  console.log(3, newVenta)
  return newVenta;
};

const createDetalleVenta = async (arrayDetalleventa, id_venta) => {

  console.log(4)
  arrayDetalleventa.map(async (i) => {
    console.log(5, i)
    const newDetallVenta = await Detalle_venta.create({

      cantidad: i.cantidad,
      valor_parcial_venta: i.valor_parcial_venta,
      id_producto: i.id_producto,
      id_venta,

    });

    console.log(6, newDetallVenta)
  })

  const Oneventa = await Venta.findOne({
    where: { id_venta },
    include: [{
      model: Detalle_venta,

    }
    ]
  });
  console.log(7, Oneventa)
  return Oneventa

};

module.exports = { createVenta, createDetalleVenta };
