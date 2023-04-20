import styles from "./Products.module.css";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { getAllProducts } from "../../../redux/actions";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";


const Products = () => {
  const products = useSelector((state) => state.products) ?? [];

  const dispatch = useDispatch();

  const session = Cookies.get("commerce_session");

  console.log(session);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [products]);


  let values = JSON.parse(session);

  let comercio = values.dataValues;
  console.log(comercio);


  const productsCommerce = products.filter(
    (p) => p.Comercio.id_comercio === comercio.id_comercio
  );

  //   console.log(productsCommerce)
  //   console.log(products)
  //   // console.log(products.Comercio.id_comercio)
  //   console.log(products?.Comercio?.id_comercio);

  // console.log(products[0].Comercio.id_comercio)


  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th style={{padding: '0.5rem'}}> Stock </th>
            <th>Editar o eliminar</th>
          </tr>
        </thead>
        <tbody>
          {session ? productsCommerce.map((p) => {
            if(p.estado)
            return (
              <>
                <tr key={p.id_producto}>
                  <td>{p.nombre}</td>
                  <td>{p.descripcion_producto}</td>
                  <td>{p.existencia}</td>
                  <td>
                    <Link to={`/product/${p.id_producto}`}>
                      <FiEdit size={22} color='var(--green-color)' className={styles.edit} style={{ margin: '5px 0px' }} />
                    </Link>
                  </td>
                </tr>
                <hr style={{ width: '520%' } } />
              </>
            );
          }): null}
        </tbody>
      </table>
    </>
  );
};

export default Products;
