import React, {useEffect, useState}from "react";
import Card from "../card/Card";
import styles from "./Cards.module.css";
import { useSelector, useDispatch } from "react-redux";
import {getAllProducts} from '../../redux/actions'


const Cards = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    
  }, [dispatch]);

  // PAGINADO

  const [numeroPagina, setNumeroPagina] = useState(1);

  const grupo = 12;
  const conteoFinal = numeroPagina * grupo;
  const conteoInicial = conteoFinal - grupo;

  const aux = products && products.slice ? products.slice(conteoInicial, conteoFinal) : [];

  const paginas = [];

  const numPaginas = Math.ceil(products.length / grupo);

  for (let i = 1; i <= numPaginas; i++) {
    paginas.push(i);
  }

console.log(aux);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
      {aux?.map((product,index) => {
        return (
          <Card
          key={index}
          producto={product}
          />
        )
      })}
      </div>
      <div className={styles.paginado}>
      <div className= {styles.paginadoAbj}>
        {/* ------------------------------CONTENEDOR PAGINADO------------------------------ */}
        <div>
          {/* ------------------------------BOTON ATRAS------------------------------ */}
          <button
            className="btnPag"
            onClick={() => setNumeroPagina(numeroPagina - 1)}
            disabled={numeroPagina === 1}
          >
            ◄
          </button>
          {/* ------------------------------BOTONES PAGINAS------------------------------ */}
          {paginas.map((pagina) => (
            <button
              key={pagina}
              className={`btnPag ${pagina === numeroPagina ? "active" : ""}`}
              onClick={() => setNumeroPagina(pagina)}
            >
              {pagina}
            </button>
          ))}
          {/* ------------------------------BOTON PROXIMO------------------------------ */}
          <button
            className="btnPag"
            onClick={() => setNumeroPagina(numeroPagina + 1)}
            disabled={numeroPagina === Math.ceil(products?.length / grupo)}
          >
            ►
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cards;