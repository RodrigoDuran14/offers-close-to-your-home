import axios from "axios";
import * as action from "./actions-type"; // para no escribir todos los action types los obtuve todos con el uso del * y lo renombre como action...para usar colocar la palabra action.[nombre del action-type]

const URL = "http://localhost:3001";


// ========================* CARRITO *========================
export function agregarAlCarrito(id, quantity) {
  console.log(id);
  return {
    type: action.AGREGAR_AL_CARRITO,
    payload: {id,quantity}
  };
}

export function eliminarDelCarrito(id) {
  return {
    type: action.ELIMINAR_DEL_CARRITO,
    payload: id,
  };
}


export function actualizarCarrito(id, cantidad){
  return{
    type: action.ACTUALIZAR_CARRITO,
    payload: {id, cantidad}
  }
}

// ========================* USUARIOS *========================
export function registerUser() {
  return () => {
    axios
      .post(`${URL}/usuario`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
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
    console.log(res.data);
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

export const getProductByCategory = (category) => {
  console.log(category);
  return { type: action.GET_PRODUCT_BY_CATEGORY, payload: category };
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

// * 10. action-creator para filtrar productos por condicion (Nuevo,Usado,Reacondicionado,Ofertas)

export const filterByNewProducts = () => {
  return { type: action.FILTER_BY_NEW_PRODUCTS }; //productos nuevos
};

export const filterByUsedProducts = () => {
  return { type: action.FILTER_BY_USED_PRODUCTS }; //productos usados
};

export const filterByRefurbishedProducts = () => {
  return { type: action.FILTER_BY_REFURBISHED_PRODUCTS }; //productos reacondicionados
};
export const filterByOffers= () => {
  return { type: action.OFERTAS }; //productos reacondicionados
};

// * 11. action-creator para filtrar productos por categoria
export function getCategorys() {
  return async function (dispatch) {
    const resp = await axios.get(`${URL}/categorias`);
    console.log(resp.data);
    dispatch({
      type: action.GET_CATEGORY,
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

export function cleanProduct(){
  return {
    type: action.CLEAN_PRODUCT
  }
}