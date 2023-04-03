import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getProductById } from '../../redux/actions'
import styles from './Detail.module.css'

const Detail = () => {
  const { product } = useSelector(state => state)
  console.log(product);

  const { id } = useParams()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(id))
  }, [dispatch,id])

  

  return (

    <section>
   

    <div className={styles.container}>

      <div className={styles.box1}>
        <img src={product.imagen} alt={product.nombre} />
      </div>

      <div className={styles.box2}>
        <div style={{ marginTop: "50px" }}>
          <h2>{product.nombre}</h2>
        </div>
        <h1>${product.valor_normal}</h1>
        <div style={{ marginTop: "20px" }}>
          <h2>Descripción</h2>
        </div>
        <div style={{ marginLeft: "20px", marginRight: "20px" }}>
          <p>{product.descripcion_producto}</p>
        </div>
        <div style={{ margin: "20px", fontSize: "20px", padding: "10px", borderRadius: "0.99rem", background: "black", color: "white" }}>
          <botton>Añadir al carrito</botton>
        </div>

        <div style={{ margin: "20px", fontSize: "20px", padding: "10px", borderRadius: "0.99rem", background: "black", color: "white" }}>
          <botton>Comprar ahora</botton>
        </div>
      </div>

    </div>
    </section>
  )
}

export default Detail
