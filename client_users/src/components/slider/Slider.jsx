import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardOfert from '../cardOfert/CardOfert';
import styles from './Slider.module.css'

function Slider() {
  const { products } = useSelector(state => state)
  const [currentProduct, setCurrentProduct] = useState(0);
  const quantity = products.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentProduct(currentProduct === quantity - 1 ? 0 : currentProduct + 1);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentProduct, quantity]);

  const nextProduct = () => {
    setCurrentProduct(currentProduct === quantity - 1 ? 0 : currentProduct + 1);
  };

  const backProduct = () => {
    setCurrentProduct(currentProduct === 0 ? quantity - 1 : currentProduct - 1);
  };

  return (
    <div className={styles.container}>
      <button onClick={backProduct}>{"<"}</button>
      {products.slice(currentProduct, currentProduct + 5).map((product, index) => (
        <div key={index} className={currentProduct === index ? styles.currentCard : styles.inactiveCard}>
          <CardOfert imagen={product.imagen} nombre={product.nombre} />
        </div>
      ))}
      <button onClick={nextProduct}>{">"}</button>
    </div>
  );
}

  /*
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

export default Slider