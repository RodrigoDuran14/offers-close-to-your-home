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
  OFERTAS,
  ORDERED_BY_NAME_ASC,
  GET_ALL_CITIES,
  CLEAN_PRODUCT,
  ACTUALIZAR_CARRITO,
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
  carrito: JSON.parse(window.localStorage.getItem("carrito")) || [],

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
        productsFitered: [...state.products].filter((product) => {
          return (
            product.Categoria_producto.nombre_categoria_producto ===
            action.payload
          );
        }),
      };
    case ORDERED_BY_NAME_DESC:
      return {
        ...state,
        products: [...state.products].sort((a, b) =>
          b.nombre.localeCompare(a.nombre)
        ),
      };
    case ORDERED_BY_NAME_ASC:
      return {
        ...state,
        products: [...state.products].sort((a, b) =>
          a.nombre.localeCompare(b.nombre)
        ),
      };
    case GET_CATEGORY:
      return {
        ...state,
        categorys: action.payload,
      };
    case ORDERED_BY_LOWEST_PRICE:
      return {
        ...state,
        products: [...state.products].filter(
          (product) => product.valor_con_descuento < 100
        ),
      };
    case ORDERED_BY_HIGHEST_PRICE:
      return {
        ...state,
        products: [...state.products].filter(
          (product) => product.valor_con_descuento > 100
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
    case OFERTAS:
      return {
        ...state,
        products: [...state.products].filter(
          (product) => product.valor_con_descuento > 60
        ),
      };

    case AGREGAR_AL_CARRITO:
      const itemExistente = state.carrito.find(
        (item) => item.id_producto === action.payload.id.id_producto
      );

      if (itemExistente) {
        return {
          ...state,
          carrito: state.carrito.map((item) =>
            item.id_producto === action.payload.id.id_producto
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          carrito: [
            ...state.carrito,
            { ...action.payload.id, cantidad: action.payload.quantity },
          ],
        };
      }

    case ACTUALIZAR_CARRITO:
      return {
        ...state,
        carrito: state.carrito.map((product) =>
          product.id === action.payload.id
            ? { ...product, cantidad: product.cantidad + 1 }
            : product
        ),
      };

    case CLEAN_PRODUCT:
      return {
        ...state,
        product: [],
      };

    default:
      return state;
  }
}

export default rootReducer;
