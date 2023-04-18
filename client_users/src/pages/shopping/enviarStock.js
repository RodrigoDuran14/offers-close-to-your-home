export default function cleanStock(carrito) {

    console.log('CLEAN', carrito);
    
    const limpio = carrito?.map(p => {
        return {
            id_producto: p.id_producto,
            cantidad: p.existencia - p.cantidad
        }
    })

    return limpio
}