import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import QuantityDisplay from '../../components/quantityDisplay/QuantityDisplay'
import { agregarAlCarrito, getProductById } from '../../redux/actions'
import styles from './Detail.module.css'
import Loader from '../../components/loader/loader'
// import Footer from '../../components/footer/Footer'

const Detail = () => {
  const { product } = useSelector(state => state)

  const { id } = useParams()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(id))
  }, [dispatch,id])

  const handlerCarrito = () => {
    dispatch(agregarAlCarrito(product))
  }  
  // Cantidad de articulos
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    setQuantity(quantity - 1);
  }

  const handleIncrease= () => {
    setQuantity(quantity + 1);
  }

  return (
    <section>
      <div className={styles.container}>
        {product.hasOwnProperty("nombre") ? (
          <>
            <div className={styles.box1}>
              <img src={product.imagen} alt={product.nombre} />
            </div>
            <div className={styles.box2}>
              <div style={{ marginTop: "0px" }}>
                <div className={styles.box1}>
                  <div style={{ margin: "10px" }}>
                    <span>{product.condicion}</span>
                  </div>
                  {/* <div style={{ width: "100%", marginBottom: "10px" }}>
                    <img src={product.imagen} alt={product.nombre} />
                  </div> */}
                </div>
  
                <div className={styles.box2}>
                  <div>
                    <h2>{product.nombre}</h2>
                  </div>
                  <div>
                    <h1>${product.valor_normal}</h1>
                  </div>
                  <div>
                    <h2>Descripción</h2>
                  </div>
                  <div style={{ marginLeft: "20px", marginRight: "20px" }}>
                    <p>{product.descripcion_producto}</p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <h4 style={{ margin: "10px" }}>Cantidad</h4>
                    <QuantityDisplay
                      quantity={quantity}
                      onDecrease={handleDecrease}
                      onIncrease={handleIncrease}
                    />
                  </div>
                  <div className={styles.btn}>
                    <button onClick={handlerCarrito}>Añadir al carrito</button>
                  </div>
                  <div className={styles.btn}>
                    <button>Comprar ahora</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
  
}

export default Detail