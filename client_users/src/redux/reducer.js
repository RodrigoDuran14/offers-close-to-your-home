import {
  CREATE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_BY_NAME,
  GET_PRODUCT_BY_CATEGORY,
  ORDERED_BY_NAME_DESC,
  GET_CATEGORY,
  ORDERED_BY_LOWEST_PRICE,
  ORDERED_BY_HIGHEST_PRICE,
  FILTER_BY_NEW_PRODUCTS,
  FILTER_BY_USED_PRODUCTS,
  FILTER_BY_REFURBISHED_PRODUCTS,
  AGREGAR_AL_CARRITO,
} from "./actions-type.js";

const initialState = {
  products: [], //22
  productsFitered: [], //22
  productID: [],
  comercios: [],
  ventas: [],
  pagos: [],
  categorys: [],
  product: {},
  filter: [],
  carrito: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        productsFitered: action.payload,
      };
    case GET_PRODUCT_BY_ID:
      return { ...state, product: action.payload };
    case GET_PRODUCT_BY_NAME:
      return { ...state, products: action.payload };
    case GET_PRODUCT_BY_CATEGORY:
      return {
        ...state,
        productsFitered: [...state.productsFitered].filter((product) => {
          return (
            product.Categoria_producto.nombre_categoria_producto ===
            action.payload
          );
        }),
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
      const itemExistente = state.carrito.find(
        (item) => item.id === action.payload.id
      );

      if (itemExistente) {
        return {
          ...state,
          carrito: state.carrito.map((item) =>
            item.id === action.payload.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          carrito: [...state.carrito, { ...action.payload, cantidad: 1 }],
        };
      }

    default:
      return state;
  }
}

export default rootReducer;
