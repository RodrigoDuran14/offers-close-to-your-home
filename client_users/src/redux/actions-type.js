
//* ACTION TYPES RELACIONADOS CON LOS PRODUCTOS
const CREATE_PRODUCT = 'CREATE_PRODUCT';
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID';
const GET_PRODUCT_BY_NAME = 'GET_PRODUCT_BY_NAME';
const GET_PRODUCT_BY_CATEGORY = 'GET_PRODUCT_BY_CATEGORY';
const ORDERED_BY_NAME_ASC = 'ORDERED_BY_NAME';
const ORDERED_BY_NAME_DESC = 'ORDERED_BY_NAME';
const ORDERED_BY_LOWEST_PRICE = 'ORDERED_BY_LOWEST_PRICE';//por  menor precio 
const ORDERED_BY_HIGHEST_PRICE = 'ORDERED_BY_HIGHEST_PRICE';// por mayor precio
const FILTER_BY_NEW_PRODUCTS = 'FILTER_BY_NEW_PRODUCTS';  //productos nuevos
const FILTER_BY_USED_PRODUCTS = 'FILTER_BY_USED_PRODUCTS';// productos usados
const FILTER_BY_REFURBISHED_PRODUCTS = 'FILTER_BY_REFURBISHED_PRODUCTS'; //productos reacondicionados

//*ACTION TYPES RELACIONADOS CON LOS COMERCIOS

const GET_ALL_STORES = 'GET_ALL_STORES';
const GET_STORES_BY_CITY = 'GET_STORES_BY_CITY';
const GET_STORE_BY_NAME = 'GET_STORE_BY_NAME';
const GET_STORE_BY_CATEGORY = 'GET_STORE_BY_CATEGORY';


//* ACTION TYPES RELACIONADOS CON LAS VENTAS
const DETAILS_OF_SALES_BY_STORE = 'DETAILS_OF_SALES_BY_STORE';
const GET_SALE_BY_ID = 'GET_SALE_BY_ID';
const GET_SALE_BY_DATE = 'GET_SALE_BY_FECHA'

//* ACTION TYPES RELACIONADO CON LOS PAGOS
const GET_PAYMENT_BY_ID = 'GET_PAYMENT_BY_ID';
const GET_PAYMENT_BY_DATE = 'GET_PAYMENT_BY_DATE';

//* ACTION TYPES RELACIONADOS CON EL USUARIO

const GET_USER_BY_ID = 'GET_USER_BY_ID';//buscar usuario por id
const USER_LOGIN = 'USER_LOGIN';  // para cuando el usuario intente ingresar a la app
const FORGOT_PASSWORD = 'FORGOT_PASSWORD';//para cuando olvide contraseña
const REGISTER_USER = 'REGISTER_USER'// para el registro de usuario por 1ra vez
const USER_DETAILS = 'USER_DETAILS';


module.exports = {
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
    GET_STORES_BY_CITY,
    GET_ALL_STORES,
    GET_STORE_BY_NAME,
    GET_USER_BY_ID,
    USER_LOGIN,
    FORGOT_PASSWORD,
    REGISTER_USER,
    USER_DETAILS,
    DETAILS_OF_SALES_BY_STORE,
    GET_SALE_BY_DATE,
    GET_SALE_BY_ID,
    GET_PAYMENT_BY_ID,
    GET_PAYMENT_BY_DATE,
    GET_STORE_BY_CATEGORY
}