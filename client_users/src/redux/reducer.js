<<<<<<< HEAD
import { FILTER_PRICE, FILTER_CONDITION } from "./actions-type";

const initialState = {
  products: [],
  product: [],
  category: [],
  filtered: false,
};

export default function rootReducer(state = initialState, action) {
  if (action.type === FILTER_PRICE) {
    const allProducts = [...state.products];
    allProducts.sort((a, b) => {
      let ratingA = a.rating;
      let ratingB = b.rating;

      let ratingANumber;
      let ratingBNumber;

      if (typeof ratingA === "object") {
        ratingANumber = Number(ratingA);
      } else {
        ratingANumber = Number(ratingA);
      }

      if (typeof ratingB === "object") {
        ratingBNumber = Number(ratingB);
      } else {
        ratingBNumber = Number(ratingB);
      }

      if (action.payload === "Asc") {
        if (ratingANumber === ratingBNumber) {
          return 0;
        } else if (ratingANumber < ratingBNumber) {
          return -1;
        }
        return 1;
      }
      if (action.payload === "Des") {
        if (ratingANumber === ratingBNumber) {
          return 0;
        } else if (ratingANumber < ratingBNumber) {
          return 1;
        }
        return -1;
      }
    });
    return {
      ...state,
      products: allProducts,
      filtered: true,
    };
  }
  /* -------------------------------------------ESTADO BASE------------------------------------------- */
  return state;
}
=======

import {
    CREATE_PRODUCT,
    GET_ALL_PRODUCTS, 
    GET_PRODUCT_BY_ID,
    GET_PRODUCT_BY_NAME,
    ORDERED_BY_NAME_ASC,
    ORDERED_BY_NAME_DESC,
    GET_PRODUCT_BY_CATEGORY,
    ORDERED_BY_LOWEST_PRICE,
    ORDERED_BY_HIGHEST_PRICE,
    FILTER_BY_NEW_PRODUCTS,
    FILTER_BY_USED_PRODUCTS,
    FILTER_BY_REFURBISHED_PRODUCTS,
   
} from "./actions-type.js"

const initialState = {
    products: [],
    productID: [],
    comercios: [],
    ventas: [],
    pagos: [],
    detail: {},
}



 function rootReducer(state = initialState, action) {
    switch(action.type) {

        case CREATE_PRODUCT:
            return { ...state, products: [...state.products, action.payload] };
        case GET_ALL_PRODUCTS:
            return { ...state, products: action.payload }
        case GET_PRODUCT_BY_ID:
            return { ...state, productID: action.payload };
        case GET_PRODUCT_BY_NAME:
            return { ...state, products: action.payload};
        case ORDERED_BY_NAME_ASC:
            return {
                ...state, products: [...state.products].sort((a, b) => a.nombre.localeCompare(b.nombre))
            };
        case ORDERED_BY_NAME_DESC:
            return {
                ...state, products: [...state.products].sort((a, b) => b.nombre.localCompare(a.nombre))
            };
        case GET_PRODUCT_BY_CATEGORY:
            return {
                ...state, products: action.payload
            };
        case ORDERED_BY_LOWEST_PRICE:
            return {
                ...state, products: [...state.products].sort((a, b) => a.valor_con_descuento - b.valor_con_descuento)
            };
        case ORDERED_BY_HIGHEST_PRICE:
            return {
                ...state, products: [...state.products].sort((a, b) => b.valor_con_descuento - a.valor_con_descuento)
            }
        case FILTER_BY_NEW_PRODUCTS:
            return {
                ...state, products: [...state.products].filter((item) => item.condicion === "Nuevo")
            };
        case FILTER_BY_USED_PRODUCTS:
            return {
                ...state, products: [...state.products].filter((item) => item.condicion === "Usado")
            };
        case FILTER_BY_REFURBISHED_PRODUCTS:
            return {
                ...state, products: [...state.products].filter((item) => item.condicion === "Reacondicionado")
            };
        default:
            return state

    }
}

export default rootReducer
>>>>>>> 043f331cafcd0650e6d11c914d79e7f3ff9b8b01
