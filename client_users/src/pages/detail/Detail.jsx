import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import QuantityDisplay from '../../components/quantityDisplay/QuantityDisplay'
import { agregarAlCarrito, getProductById, cleanProduct, getReviews, cleanReviews } from '../../redux/actions'
import { Redirect } from "react-router-dom";
import s from './Detail.module.css'
import swal from 'sweetalert'
import CardSReviews from "../../components/cardsReviews/CardsReviews"


const Detail = () => {

  const { product, carrito } = useSelector(state => state)
  const { id } = useParams()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(id))
    dispatch(getReviews(id))
    return (()=>{
      dispatch(cleanProduct())
      dispatch(cleanReviews())
    })
  }, [dispatch,id])

  //Cuando se agrega al carrito
  const handlerCarrito = () => {
    const exists = carrito?.find(e => {
      return e.id_producto === product.id_producto
    })
   if(!exists){
    dispatch(agregarAlCarrito(product, quantity))
     swal({
       title: `Agregaste ${product.nombre}`,
       icon: "success",
       timer: "3000",
       showConfirmButton: false
     })
    }else{
      swal({
        title: `Este articulo ya está agregado`,
        text: "Para modificar la cantidad dirijase al carrito de compra",
        icon: "error",
        timer: "3000"
      })
    }
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
  //Boton comprar ahora
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const handlerComprar = () => {
    const exists = carrito?.find(e => {
      return e.id_producto === product.id_producto
    })
    if(!exists){
      dispatch(agregarAlCarrito(product, quantity))
    }
    setShouldRedirect(true)
  }
  
  return (
    <>
      {carrito && shouldRedirect 
      ? <Redirect to="/shopping-cart" /> 
      : (<div>
            <div className={s.box1}>
              <div className={s.container}>
                <div
                ><img className={s.image} src={product.imagen} alt={product.nombre}/></div>
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
                    <button style={{ width: '240px' }} onClick={handlerComprar}>Comprar</button>
                    <button style={{ width: '240px' }} onClick={handlerCarrito}>Agregar al carrito</button>
                  </div>

                </div>
              </div>
            </div>

            <div className={s.box2}>
              <div className={s.box2Hijo}>
                <CardSReviews/>
              </div>
            </div>
        
        </div>
      )} 
    </>
  )
}

export default Detail

