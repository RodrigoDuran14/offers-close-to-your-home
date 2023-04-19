import axios from "axios";
import * as action from "./actions-type";
const URL = "http://localhost:3001";

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

export function getCategorys() {
  return async function (dispatch) {
    const resp = await axios.get(`${URL}/categoriaComercio`);
    dispatch({
      type: action.GET_CATEGORY,
      payload: resp.data,
    });
  };
}

export function getAllCities() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/ciudad`);
      // console.log(response.data);
      dispatch({ type: action.GET_ALL_CITIES, payload: response.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: action.GET_ALL_CITIES, payload: error });
    }
  };
}

export function loading() {
  return {
    type: action.LOADING,
  };
}

export function ready() {
  return {
    type: action.READY,
  };
}
export function commerceLoggedIn(estado) {
  return {
    type: action.COMMERCE_LOGIN,
    payload: estado,
  };
}

export function registerCommerce() {
  return () => {
    axios
      .post(`${URL}/commerce`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
}

export function getCommerceByID(email) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/commerce?ByEmail=${email}`);
      dispatch({
        type: action.GET_COMMERCE_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      console.log(error, "No se encontro usuario con ese id");
      dispatch({
        type: action.GET_COMMERCE_BY_ID,
        payload: error,
      });
    }
  };
}

export function updateCommerce(comercio) {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${URL}/commerce`, comercio);
      dispatch({
        type: action.UPDATE_COMMERCE,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: action.UPDATE_COMMERCE,
        payload: error,
      });
    }
  };
}

export function getProductCategory() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/categorias`);
      dispatch({
        type: action.GET_PRODUCT_BY_CATEGORY,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: action.GET_PRODUCT_BY_CATEGORY,
        payload: error,
      });
    }

  };
}


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


  

  export function getAllCategorias() {
    return async (dispatch) => {
      try {
        const response = await axios.get(`${URL}/categorias`);
        // console.log(response.data);
        dispatch({ type: action.GET_ALL_CATEGORIAS, payload: response.data });
      } catch (error) {
        console.log(error);
        dispatch({ type: action.GET_ALL_CATEGORIAS, payload: error });
      }
    };
  }


  export function updateProduct(producto) {
    return async (dispatch) =>{
      try {
        const response = await axios.put(`${URL}/products/editProduct`, producto)
        dispatch({
          type: action.UPDATE_PRODUCT,
          payload: response.data
        })
      } catch (error) {
        dispatch({
          type: action.UPDATE_PRODUCT,
          payload: error
        })
      }
    }
  }

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


