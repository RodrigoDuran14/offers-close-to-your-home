import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { filterByCondition, filterByPrice } from "../../redux/actions";
import styles from "./Filter.module.css";
import { products } from "../../pages/home/Home";

function Filter(props) {
  const productos = products;
  console.log(productos.condition);

  /*FILTRO POR CONDICION */

  function handleFilterCondition(e) {
    if (e.target.value === "Filtro por condicion") {
      console.log("Trae todos los productos");
      return productos;
    } else if (e.target.value === "Usado") {
      console.log("Filtro por usados");
      return productos?.condition === "Usado";
    } else if (e.target.value === "Nuevo") {
      console.log("Filtro por nuevos");
    } else {
      console.log("Filtro por reacondicionado");
      props.filterByPrice(e.target.value, props.videojuego);
    }
  }

  /* FILTRO POR PRECIO */

  function handleFilterPrice(e) {
    if (e.target.value === "Filtro por precio") {
      console.log("Trae todos los productos");
    } else if (e.target.value === "Asc") {
      console.log("Filtro por precio ascendente");
    } else {
      console.log("Filtro por precio descendente");
    }
  }

  /* FILTRO POR CATEGORIA */

  function handleSelectCategory(e) {
    if (e.target.value === "Filtro por categoria") {
      console.log("Trae todos los productos");
    } else if (e.target.value === "Cosmetica") {
      console.log("Filtra por Cosmetica");
    } else if (e.target.value === "Electronica") {
      console.log("Filtra por Electronica");
    } else if (e.target.value === "Indumentaria") {
      console.log("Filtra por Indumentaria");
    } else if (e.target.value === "Alimentos") {
      console.log("Filtra por Alimentos");
    } else if (e.target.value === "Accesorios") {
      console.log("Filtra por Accesorios");
    } else if (e.target.value === "Muebles") {
      console.log("Filtra por Muebles");
    } else if (e.target.value === "Jardineria") {
      console.log("Filtra por Jardineria");
    } else if (e.target.value === "Deportes") {
      console.log("Filtra por Deportes");
    } else if (e.target.value === "Joyeria") {
      console.log("Filtra por Joyeria");
    } else if (e.target.value === "Herramientas") {
      console.log("Filtra por Herramientas");
    }
  }

  return (
    <div className={styles.contenedor}>
      <div>
        <select
          className={styles.filtro}
          name="Price"
          onChange={(e) => handleFilterPrice(e)}
        >
          <option value="Filtro por precio">Filtro por precio</option>
          <option value="Asc">Ascendente</option>
          <option value="Des">Descendente</option>
        </select>
      </div>
      <div>
        <select
          className={styles.filtro}
          name="Condition"
          onChange={(e) => handleFilterCondition(e)}
        >
          <option value="Filtro por condicion">Filtro por condición</option>
          <option value="Usado">Usado</option>
          <option value="Nuevo">Nuevo</option>
          <option value="Reacondicionado">Reacondicionado</option>
        </select>
      </div>
      <div>
        <select
          className={styles.filtro}
          name="Condition"
          onChange={(e) => handleSelectCategory(e)}
        >
          <option value="Filtro por categoria">Selecciona una categoria</option>
          <option value="Cosmetica">Cosmética</option>
          <option value="Electronica">Electrónica</option>
          <option value="Indumentaria">Indumentaria</option>
          <option value="Alimentos">Alimentos</option>
          <option value="Accesorios">Accesorios</option>
          <option value="Muebles">Muebles</option>
          <option value="Jardineria">Jardinería</option>
          <option value="Deportes">Deportes</option>
          <option value="Joyeria">Joyería</option>
          <option value="Herramientas">Herramientas</option>
        </select>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    products: state.products,
    filtered: false,
  };
}

export default connect(mapStateToProps, { filterByCondition, filterByPrice })(
  Filter
);
