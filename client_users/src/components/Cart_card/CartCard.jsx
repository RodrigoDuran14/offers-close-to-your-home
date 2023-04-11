import { IoTrashBinOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import s from "./cartcard.module.css";
import QuantityDisplay from "../quantityDisplay/QuantityDisplay";

export default function CartCard(product) {
  const dispatch = useDispatch();
  function eliminarProducto() {
    dispatch(eliminarProducto(product.id));
  }

  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    //dispatch(actualizarCarrito(product, quantity))
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
        quantity={quantity}
        onDecrease={handleDecrease}
        onIncrease={handleIncrease}
      />
      </div>
      <div className={s.eliminar} onClick={eliminarProducto}>
        <IoTrashBinOutline size={20} />
      </div>
    </div>
  );
}
