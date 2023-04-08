import {
  CREATE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_BY_NAME,
  ORDERED_BY_NAME_ASC,
  ORDERED_BY_NAME_DESC,
  GET_CATEGORY,
  ORDERED_BY_LOWEST_PRICE,
  ORDERED_BY_HIGHEST_PRICE,
  FILTER_BY_NEW_PRODUCTS,
  FILTER_BY_USED_PRODUCTS,
  FILTER_BY_REFURBISHED_PRODUCTS,
  AGREGAR_AL_CARRITO
} from "./actions-type.js";

const initialState = {
  products: [],
  productID: [],
  comercios: [],
  ventas: [],
  pagos: [],
  categorys: [],
  product: {},
  carrito: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case GET_ALL_PRODUCTS:
      return { ...state, products: action.payload };
    case GET_PRODUCT_BY_ID:
      return { ...state, product: action.payload };
    case GET_PRODUCT_BY_NAME:
      return { ...state, products: action.payload };
    case ORDERED_BY_NAME_ASC:
      return {
        ...state,
        products: [...state.products].sort((a, b) =>
          a.nombre.localeCompare(b.nombre)
        ),
      };
    case ORDERED_BY_NAME_DESC:
      return {
        ...state,
        products: [...state.products].sort((a, b) => {
          if (a.nombre > b.nombre) return -1;
          if (a.name < b.nombre) return 1;
          return 0;
        }),
      };
    case GET_CATEGORY:
      return {
        ...state,
        categorys: action.payload,
      };
    case ORDERED_BY_LOWEST_PRICE:
      return {
        ...state,
        products: [...state.products].sort(
          (a, b) => a.valor_con_descuento - b.valor_con_descuento
        ),
      };
    case ORDERED_BY_HIGHEST_PRICE:
      return {
        ...state,
        products: [...state.products].sort(
          (a, b) => b.valor_con_descuento - a.valor_con_descuento
        ),
      };
    case FILTER_BY_NEW_PRODUCTS:
      return {
        ...state,
        products: [...state.products].filter(
          (item) => item.condicion === "Nuevo"
        ),
      };
    case FILTER_BY_USED_PRODUCTS:
      return {
        ...state,
        products: [...state.products].filter(
          (item) => item.condicion === "Usado"
        ),
      };
    case FILTER_BY_REFURBISHED_PRODUCTS:
      return {
        ...state,
        products: [...state.products].filter(
          (item) => item.condicion === "Reacondicionado"
        ),
      };
    case AGREGAR_AL_CARRITO:
      return {
        ...state,
        carrito: [...carrito, action.payload]
      }
    default:
      return state;
  }
}

export default rootReducer;
