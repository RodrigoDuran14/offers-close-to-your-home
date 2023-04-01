import axios from "axios";
import { CREATE_PRODUCT, FILTER_CONDITION, FILTER_PRICE } from "./actions-type";

const BACK_HOST = "http://localhost:3001";

// ========================* PRODUCTS *========================
export function createProduct(product) {
  console.log(`createProduct function (${product})`);

  return () => {
    axios
      .post(`${BACK_HOST}/products`, product)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
}

export function filterByPrice(modo) {
  return function (dispatch) {
    dispatch({
      type: FILTER_PRICE,
      payload: modo,
    });
  };
}

export function filterByCondition(modo) {
  return function (dispatch) {
    dispatch({
      type: FILTER_CONDITION,
      payload: modo,
    });
  };
}
