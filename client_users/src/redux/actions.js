import axios from "axios";
import * as action from "./actions-type"; // para no escribir todos los action types los obtuve todos con el uso del * y lo renombre como action...para usar colocar la palabra action.[nombre del action-type]

//const URL = "http://localhost:3001"
const URL = "https://justoffers-back.up.railway.app";

// ========================* USUARIOS *========================
export function registerUser() {
  return () => {
    axios.post(`${URL}/usuario`)
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }
}


// ========================* PRODUCTOS *========================
export function createProduct(product) {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${URL}/products`, product);
      console.log(response.data);
      dispatch({ type: action.CREATE_PRODUCT, payload: response.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: action.CREATE_PRODUCT, payload: error });
    }
  };
}

// * 2. action-creator para obtener todos los productos del back-end

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/products`);
      // console.log(response.data);
      dispatch({ type: action.GET_ALL_PRODUCTS, payload: response.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: action.GET_ALL_PRODUCTS, payload: error });
    }
  };
};

// * 3.action-creator para obtener producto por ID

export const getProductById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}/products/${id}`);

    dispatch({
      type: action.GET_PRODUCT_BY_ID,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: action.GET_PRODUCT_BY_ID,
      payload: error,
    });
  }
};

// * 4.action-creator para obtener producto por nombre

export const getProductByName = (name) => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}/products?name=${name}`);
    const result = res.data;
    console.log(result);
    dispatch({
      type: action.GET_PRODUCT_BY_NAME,
      payload: result,
    });
  } catch (error) {
    console.log(error);
    // dispatch({
    //     type: action.GET_PRODUCT_BY_NAME,
    //     payload: error
    // })
  }
};

// * 5. action-creator para obtener producto por categoría

export const getProductByCategory = (name) => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}/products}`);
    const result = res.data.filter((product) => product.nombre === name);

    dispatch({
      type: action.GET_PRODUCT_BY_CATEGORY,
      payload: result,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: action.GET_PRODUCT_BY_CATEGORY,
      payload: error,
    });
  }
};

// * 6. action-creator para ordenar productos por nombre ascendente

export const orderedByNameASC = () => {
  return { type: action.ORDERED_BY_NAME_ASC };
};

// * 7. action-creator para ordenar productos por nombre descendente
export const orderedByNameDESC = () => {
  return { type: action.ORDERED_BY_NAME_DESC };
};

// * 8. action-creator para ordenar productos por menor precio

export const orderedByLowestPrice = () => {
  return { type: action.ORDERED_BY_LOWEST_PRICE };
};

// * 9. action-creator para ordenar productos por mayor precio

export const orderedByHighestPrice = () => {
  return { type: action.ORDERED_BY_HIGHEST_PRICE };
};

// * 10. action-creator para filtrar productos por condicion (Nuevo,Usado,Reacondicionado)

export const filterByNewProducts = () => {
  return { type: action.FILTER_BY_NEW_PRODUCTS }; //productos nuevos
};

export const filterByUsedProducts = () => {
  return { type: action.FILTER_BY_USED_PRODUCTS }; //productos usados
};

export const filterByRefurbishedProducts = () => {
  return { type: action.FILTER_BY_REFURBISHED_PRODUCTS }; //productos reacondicionados
};

// * 11. action-creator para filtrar productos por categoria
export function filterByCategory() {
  return async function (dispatch) {
    const resp = await axios.get(`${URL}/categorias`);
    dispatch({
      type: action.GET_ALL_PRODUCTS,
      payload: resp.data,
    });
  };
}

// CODIGO REALIZADO POR FRANCO
export function getProducts() {
  return (dispatch) => {
    axios
      .get(`${URL}/products`)
      .then((response) =>
        dispatch({
          type: action.GET_PRODUCTS,
          payload: response.data,
        })
      )
      .catch((err) => console.log(err));
  };
}

export function getDetail(id) {
  return (dispatch) => {
    axios
      .get(`${URL}/products/${id}`)
      .then((response) =>
        dispatch({
          type: action.GET_DETAIL,
          payload: response.data,
        })
      )
      .catch((err) => console.log(err));
  };
}
