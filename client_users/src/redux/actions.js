import axios from "axios"; // Se usara para filtros desde el back
import { FILTER_CONDITION, FILTER_PRICE } from "../redux/actions-type";

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
