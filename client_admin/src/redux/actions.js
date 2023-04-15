import axios from "axios";
import * as action from "./actions-type"
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