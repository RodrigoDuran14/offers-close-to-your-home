import { IoTrashBinOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { eliminarDelCarrito, restarCantidad, sumarCantidad } from "../../redux/actions"
import s from "./cartcard.module.css";
import QuantityDisplay from "../quantityDisplay/QuantityDisplay";

export default function CartCard(product) {
  const dispatch = useDispatch();

  function handleEliminarProducto() {
    dispatch(eliminarDelCarrito(product));
  }

  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    setQuantity(quantity - 1);
    dispatch(restarCantidad(product))
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    dispatch(sumarCantidad(product))
  };

  return (
    <div className={s.container}>
      <div className={s.image}>
        <img src={product.imagen} alt={product.nombre} />
      </div>
      <div className={s.text}>
        <h3 className={s.name}>Nombre: {product.nombre}</h3>
      </div>
      <div className={s.cantidad}>Cantidad:{product.cantidad}</div>
      <div className={s.precio}>$ {product.valor_con_descuento}</div>
      <div className={s.quantity}>
      <QuantityDisplay
        quantity={product.cantidad}
        onDecrease={handleDecrease}
        onIncrease={handleIncrease}
      />
      </div>
      <div className={s.eliminar} onClick={handleEliminarProducto}>
        <IoTrashBinOutline size={20} />
      </div>
    </div>
  );
}
