import{
    CREATE_PRODUCT,
    GET_ALL_PRODUCTS,
    GET_PRODUCT_BY_NAME,
    GET_CATEGORY,
    GET_ALL_CITIES,
    LOADING,
    READY,
    COMMERCE_LOGIN

}from "./actions-type.js"




const initialState = {
    logIn: false,
    products: [], 
    productsFitered: [], 
    copyProducts: [],
    comercios: [],
    ventas: [],
    pagos: [],
    categorys: [],
    ciudades: [],
    display: false,
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
        copyProducts:action.payload,
        
      }; case GET_PRODUCT_BY_NAME:
      return { ...state,
        productsFitered: state.products.filter(product=>product.nombre===action.payload )
      }
      ;case GET_CATEGORY:
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
    
        default:
           return state
    }
}