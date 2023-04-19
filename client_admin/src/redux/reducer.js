import {
  CREATE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_NAME,
  GET_CATEGORY,
  GET_ALL_CITIES,
  LOADING,
  READY,
  COMMERCE_LOGIN,
  GET_COMMERCE_BY_ID,
  UPDATE_COMMERCE,
  GET_ALL_CATEGORIAS,
  UPDATE_PRODUCT,
  GET_PRODUCT_BY_CATEGORY,
  GET_PRODUCT_BY_ID
     
} from "./actions-type.js";

const initialState = {
  logIn: false,
  products: [],
  product:[],
  productsFitered: [],
  copyProducts: [],
  comercios: [],
  ventas: [],
  pagos: [],
  categorys: [],
  ciudades: [],
  display: false,
  categorias:[],
  productCategory: [],

};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };

    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        productsFitered: action.payload,
        copyProducts: action.payload,
      };

    case GET_PRODUCT_BY_NAME:
      return {
        ...state,
        productsFitered: state.products.filter(
          (product) => product.nombre === action.payload
        ),
      };

    case GET_CATEGORY:
      return {
        ...state,
        categorys: action.payload,
      };

    case GET_ALL_CITIES:
      return {
        ...state,
        ciudades: action.payload,
      };

    case LOADING:
      return {
        ...state,
        display: true,
      };

    case READY:
      return {
        ...state,
        display: false,
      };

    case COMMERCE_LOGIN:
      return {
        ...state,
        logIn: action.payload,
      };

    case GET_COMMERCE_BY_ID:
      return {
        ...state,
        comercios: action.payload,
      };
       case GET_ALL_CATEGORIAS:
        return{
          ...state,
          categorias: action.payload
        }
        case UPDATE_PRODUCT:
          const exist = state.products.find(
            (item) => item.id_producto === action.payload.id_producto
          );
          if (exist) {
            return {
              ...state,
              products: state.products.map((item) =>
                item.id_producto === action.payload.id_producto
                  ? action.payload
                  : item
              ),
            };
          }

      case UPDATE_COMMERCE:
      const existe = state.comercios.find(
        (item) => item.id_comercio === action.payload.id_comercio
      );
      if (existe) {
        return {
          ...state,
          comercios: state.comercios.map((item) =>
            item.id_comercio === action.payload.id_comercio
              ? action.payload
              : item
          ),
        };
      }
    case GET_PRODUCT_BY_CATEGORY:
      return {
        ...state,
        productCategory: action.payload,
      };

      case GET_PRODUCT_BY_ID:
        return { ...state, product: action.payload };
      
    default:
      return state;
  }
}
