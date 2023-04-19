import styles from "./Products.module.css";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { getAllProducts } from "../../../redux/actions";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoTrashBinOutline } from "react-icons/io5";
import axios from "axios";

const Products = () => {
  const products = useSelector((state) => state.products) ?? [];

  const dispatch = useDispatch();

  const session = Cookies.get("commerce_session");
  console.log(session);
  let values = JSON.parse(session);

  let comercio = values.dataValues;
  console.log(comercio);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

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
            <th>Stock</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {productsCommerce.map((p) => {

            return (
              <tr key={p.id_producto}>
                <td>{p.nombre}</td>
                <td>{p.descripcion_producto}</td>
                <td>{p.existencia}</td>
                <td>
                  <Link to={`/product/${p.id_producto}`}>
                    <FiEdit />
                  </Link>
                </td>
                <td>
                  <button
                    
                  >
                    <IoTrashBinOutline />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Products;
