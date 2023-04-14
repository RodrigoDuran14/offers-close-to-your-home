import React, {useEffect, useState}from "react";
import Venta from "../venta/Venta";
import styles from "./Ventas.module.css";
//import { useSelector, useDispatch } from "react-redux";
//import {getAllProducts} from '../../redux/actions'
//import Loader from "../loader/loader";
import { Link } from "react-router-dom";


const Ventas = () => {
  // const products = useSelector((state) => state.products);
  // const dispatch = useDispatch();
 
  // useEffect(() => {
  //   dispatch(getAllProducts());
    
  // }, [dispatch]);

  // PAGINADO

//   const [numeroPagina, setNumeroPagina] = useState(1);

//   const grupo = 12;
//   const conteoFinal = numeroPagina * grupo;
//   const conteoInicial = conteoFinal - grupo;

//   const aux = products && products.slice ? products.slice(conteoInicial, conteoFinal) : [];

//   const paginas = [];

//   const numPaginas = Math.ceil(products.length / grupo);

//   for (let i = 1; i <= numPaginas; i++) {
//     paginas.push(i);
//   }

// console.log(aux);

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
      {/* {aux.length <= 0 ? <Loader /> : 
      aux?.map((product,index) => {
        return ( */}
        <div className={styles.titulo}>
        <h1>Mis ventas:</h1>
        <Link to= "/misventas">
        <h4 className={styles.mas}> Ver mas..</h4>
         </Link>
        </div>
        <div className={styles.card}>
          <Venta />
          <Venta />
        </div>
        {/* )
      })} */}
      </div>
      <div className={styles.paginado}>
      <div className= {styles.paginadoAbj}>
        {/* ------------------------------CONTENEDOR PAGINADO------------------------------ */}
        <div>
          {/* ------------------------------BOTON ATRAS------------------------------ */}
          {/* <button
            className="btnPag"
            onClick={() => setNumeroPagina(numeroPagina - 1)}
            disabled={numeroPagina === 1}
          >
            ◄
          </button> */}
          {/* ------------------------------BOTONES PAGINAS------------------------------ */}
          {/* {paginas.map((pagina) => (
            <button
              key={pagina}
              className={`btnPag ${pagina === numeroPagina ? "active" : ""}`}
              onClick={() => setNumeroPagina(pagina)}
            >
              {pagina}
            </button>
          ))} */}
          {/* ------------------------------BOTON PROXIMO------------------------------ */}
          {/* <button
            className="btnPag"
            onClick={() => setNumeroPagina(numeroPagina + 1)}
            disabled={numeroPagina === Math.ceil(products?.length / grupo)}
          >
            ►
          </button> */}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Ventas;