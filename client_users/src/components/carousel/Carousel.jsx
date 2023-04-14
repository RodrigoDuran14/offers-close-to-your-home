import { useSelector, useDispatch } from 'react-redux'
import CardOfert from '../cardOfert/CardOfert';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';
import { getAllProducts } from '../../redux/actions';

export default function Carousel({ numSlides, speed }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  const products = useSelector(state => state.products)
  console.log('CAROUSEL', products);


  const renderSlides = () => 
    products.map(p => (
      <CardOfert key={p.id_producto} id={p.id_producto} imagen={p.imagen} nombre={p.nombre} valor_normal={p.valor_normal} valor_con_descuento={p.valor_con_descuento} />
    ))
  

  return (
    <div style={{marginTop: '50px', padding: '50px'}}>
      <h1>Mira las ofertas destacadas!</h1>
      <Slider
        dots={false}
        slidesToShow={numSlides || 5}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={speed || 2000}
      >{renderSlides()}
      </Slider>
    </div>
  );
}

// ================ CARRUSEL DE FRANCO ==================
// const { products } = useSelector(state => state)
// const [currentProduct, setCurrentProduct] = useState(0);
// const quantity = products.length;

// useEffect(() => {
//   const timer = setTimeout(() => {
//     setCurrentProduct(currentProduct === quantity - 1 ? 0 : currentProduct + 1);
//   }, 3000);

//   return () => clearTimeout(timer);
// }, [currentProduct, quantity]);

// const nextProduct = () => {
//   setCurrentProduct(currentProduct === quantity - 1 ? 0 : currentProduct + 1);
// };

// const backProduct = () => {
//   setCurrentProduct(currentProduct === 0 ? quantity - 1 : currentProduct - 1);
// };

// <div className={styles.container}>
//   <button onClick={backProduct}>{"<"}</button>
//   {products.slice(currentProduct, currentProduct + 5).map((product, index) => (
//     <div key={index} className={currentProduct === index ? styles.currentCard : styles.inactiveCard}>
//       <CardOfert imagen={product.imagen} nombre={product.nombre} />
//     </div>
//   ))}
//   <button onClick={nextProduct}>{">"}</button>
// </div>
/*
// ================ CARRUSEL DE FRANCO ==================



useEffect(() => {
   setTimeout(() => {
     setCurrentProduct(currentProduct === quantity -1 ?
     0: currentProduct + 1)
   },3000)
 },[currentProduct])
 
 const nextProduct = () => {
   setCurrentProduct(currentProduct === quantity -1 ?
       0: currentProduct + 1)
 }

 const backProduct = () => {
   setCurrentProduct(currentProduct === 0 ?
       quantity -1 : currentProduct - 1)
}
*/
/*return (
  <div className={styles.container}>
      <button onClick={backProduct}>{"<"}</button>
      {products?.map((product,index) => {
          return (
              <div>
                  {currentProduct === index && (
                  <CardOfert
                  key={index}
                  imagen={product.imagen}
                  nombre={product.nombre}
                  />
                  )}
              </div>
          )
      })}
      <button onClick={nextProduct}>{">"}</button>
  </div>
)
}*/

