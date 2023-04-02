
import React, { useState } from 'react'
import Cards from '../../components/cards/Cards'
import Filter from '../../components/filter/Filter'
import styles from './Home.module.css'


function Home () {

//   const [numeroPagina, setNumeroPagina] = useState(1);

//   const grupo = 12;
//   const conteoFinal = numeroPagina * grupo;
//   const conteoInicial = conteoFinal - grupo;

//   const aux = products && products.slice ? products.slice(conteoInicial, conteoFinal) : [];

//   const paginas = [];

//   const numPaginas = Math.ceil(products?.length / grupo);

//   for (let i = 1; i <= numPaginas; i++) {
//     paginas.push(i);
//   }

// console.log(aux);

  return (
    <div className= {styles.container}>
      {/* <div className={styles.filtros}>
         <Filter/>
      </div> */}
      <section>
      <Cards/>
    </section>
      {/* <div className= {styles.paginadoAbj}> */}
        {/* ------------------------------CONTENEDOR PAGINADO------------------------------ */}
        {/* <div> */}
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
            disabled={numeroPagina === Math.ceil(products.length / grupo)}
          >
            ►
          </button>
        </div>
      </div> */}
    </div>

  )
}

export default Home
