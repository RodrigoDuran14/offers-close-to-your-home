import axios from "axios";

import * as action from './actions-type' // para no escribir todos los action types los obtuve todos con el uso del * y lo renombre como action...para usar colocar la palabra action.[nombre del action-type]

const URL = 'http://localhost:3001'

// ========================* PRODUCTS *========================
export function createProduct(product) {
    return async (dispatch) => {
        try {
          const response = await axios.post(`${URL}/products`, product);
          console.log(response.data)
          dispatch({ type: action.CREATE_PRODUCT, payload: response.data });
        } catch (error) {
          console.log(error);
          dispatch({ type: action.CREATE_PRODUCT, payload: error});

        }
      };
}

// * 2. action-creator para obtener todos los productos del back-end 

export const getAllProducts = ()=>{
    return async (dispatch) => {
        try {
          const response = await axios.get(`${URL}/products`);
          console.log(response.data)
          dispatch({ type: action.GET_ALL_PRODUCTS, payload: response.data });
        } catch (error) {
          console.log(error);
          dispatch({ type: action.GET_ALL_PRODUCTS, payload: error});
        }
      };
}

// * 3.action-creator para obtener producto por ID


export const getProductById = (id) => async dispatch => {
    try {
      const res = await axios.get(`${URL}/products/${id}`)
  
      dispatch({
        type: action.GET_PRODUCT_BY_ID,
        payload: res.data
      })
    } catch (error) {
        console.log(error);
        dispatch({
            type: action.GET_PRODUCT_BY_ID,
            payload: error
          })
    };
  };
