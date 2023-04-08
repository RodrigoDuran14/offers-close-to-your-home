import { IoTrashBinOutline } from "react-icons/io5";
import s from './cartcard.module.css'

export default function CartCard(product) {
    const imagen = 'https://cdn.shopify.com/s/files/1/0522/3858/1922/products/pulsera-ajustable-de-piedras-naturales-y-chakra-gold-shield-1.jpg?v=1655949144'


    return (
        <div className={s.container}>
            <div className={s.image}></div>
            <div className={s.text}><h3 className={s.name}>Título del producto que seguro es largo</h3></div>
            <div className={s.cantidad}>cantidad</div>
            <div className={s.precio}>precio</div>
            <div className={s.eliminar}><IoTrashBinOutline size={20}/></div>
        </div>
    )
}