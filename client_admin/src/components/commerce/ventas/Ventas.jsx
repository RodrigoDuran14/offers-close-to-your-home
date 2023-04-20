import React, { useEffect, useState } from "react";
import Venta from "../venta/Venta";
//import { useSelector, useDispatch } from "react-redux";
//import {getAllProducts} from '../../redux/actions'
//import Loader from "../loader/loader";
import { Link } from "react-router-dom";
import s from "./Ventas.module.css";

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
    <div className={s.container}>
      <div className={s.cards}>        
        <div className={s.titulo}>
          <h1>Mis ventas:</h1>
          <Link to="/misventas" className={s.mas}>
            <h4> Ver mas...</h4>
          </Link>
        </div>
        <div className={s.card}>
          <Venta />
          <Venta />
        </div>
        
      </div>
      <div className={s.paginado}>
        <div className={s.paginadoAbj}>
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