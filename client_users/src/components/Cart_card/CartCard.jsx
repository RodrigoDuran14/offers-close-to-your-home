import { IoTrashBinOutline } from "react-icons/io5";
import { useSelector } from 'react-redux'

import s from './cartcard.module.css'

export default function CartCard() {

    const { product } = useSelector(state => state?.carrito)


    return (
        <div className={s.container}>
            <div className={s.image}>{product?.imagen}</div>
            <div className={s.text}><h3 className={s.name}>Nombre: {product?.nombre}</h3></div>
            <div className={s.cantidad}>Cantidad:{product?.cantidad}</div>
            <div className={s.precio}>$ {product?.valor_con_descuento}</div>
            <div className={s.eliminar}><IoTrashBinOutline size={20}/></div>
        </div>
    )
}