import React from "react";
import Card from "../card/Card";
import styles from "./Cards.module.css";
import { useSelector} from "react-redux";
// import {getAllProducts} from '../../redux/actions'
import Loader from "../loader/loader";

const Cards = () => {
  const { productsFitered, display } = useSelector((state) => state);



  // PAGINADO

  const [numeroPagina, setNumeroPagina] = useState(1);

  const grupo = 12;
  const conteoFinal = numeroPagina * grupo;
  const conteoInicial = conteoFinal - grupo;

  const aux =
    productsFitered && productsFitered.slice
      ? productsFitered.slice(conteoInicial, conteoFinal)
      : [];

  const paginas = [];

  const numPaginas = Math.ceil(productsFitered.length / grupo);

  for (let i = 1; i <= numPaginas; i++) {
    paginas.push(i);
  }

  return (
    <div className={styles.container}>
      {display ? (
        <Loader />
      ) : (
        <>
          <div className={styles.card}>
            {aux && aux.map((product, index) => {
              return <Card key={index} producto={product} />;
            })}
          </div>
          <div className={styles.paginado}>
            <div className={styles.paginadoAbj}>
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
                    className={`btnPag ${
                      pagina === numeroPagina ? "active" : ""
                    }`}
                    onClick={() => setNumeroPagina(pagina)}
                  >
                    {pagina}
                  </button>
                ))}
                {/* ------------------------------BOTON PROXIMO------------------------------ */}
                <button
                  className="btnPag"
                  onClick={() => setNumeroPagina(numeroPagina + 1)}
                  disabled={
                    numeroPagina === Math.ceil(productsFitered?.length / grupo)
                  }
                >
                  ►
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cards;
