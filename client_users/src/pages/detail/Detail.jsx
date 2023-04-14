import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import QuantityDisplay from '../../components/quantityDisplay/QuantityDisplay'
import { agregarAlCarrito, actualizarCarrito, getProductById, cleanProduct } from '../../redux/actions'
import Loader from '../../components/loader/loader'
import s from './Detail.module.css'
import swal from 'sweetalert'

const Detail = () => {

  const { product, carrito, display } = useSelector(state => state)

  const { id } = useParams()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(id))
    return (()=>{
      dispatch(cleanProduct())
    })
  }, [dispatch,id])

  const handlerCarrito = () => {
    console.log("añadido");
      dispatch(agregarAlCarrito(product, quantity))
    
  }  

  // Cantidad de articulos
  const [quantity, setQuantity] = useState(1);
  
  const handleDecrease = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  }

  const handleIncrease = () => {
    if (quantity !== 10) {
      setQuantity(quantity + 1);
    } else {
      swal({
        title: 'Número máximo de unidades disponibles',
        icon: 'info'
      })
    }
  }

  return (
    <>
      {display ? <Loader /> : (
        <div className={s.container}>

          <div
          //  style={{ backgroundImage: `url(${product.imagen})` }} 
           ><img className={s.image} src={product.imagen}/></div>
          <div className={s.condicion}>{product.condicion}</div>

          <hr />

          <div>
            <h1>{product.nombre}</h1>

            <h4 className={s.descripcion_producto}>{product.descripcion_producto}</h4>

            <div className={s.precios}>
              <h2 className={s.valor_normal}>${product.valor_normal}</h2>
              <h1 className={s.valor_con_descuento}>${product.valor_con_descuento}</h1>
            </div>

            <div>
              <h4>Selecciona la cantidad</h4>
              <QuantityDisplay
                quantity={quantity}
                onDecrease={handleDecrease}
                onIncrease={handleIncrease}
              />
            </div>

            <div className={s.buttons}>
              <button style={{ width: '240px' }}>Comprar ahora</button>
              <button style={{ width: '240px' }} onClick={handlerCarrito} >Agregar al carrito</button>
            </div>

          </div>
        </div>
      )}
    </>
  )

}

export default Detail

