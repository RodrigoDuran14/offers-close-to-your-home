import axios from "axios";
import { GET_PRODUCTS, GET_PRODUCT } from './actions-type'

export const getProducts = () => {
    return async function (dispatch){
        await axios.get("http://localhost:3001/products")
        .then(res => {
            const data = res.data
            console.log(data);
            dispatch({ type: GET_PRODUCTS, payload : data }) 
        })
        .catch(err => alert(err)) 
    }
};

export const getProduct = (id) => {
    return async function (dispatch){
        await axios.get(`http://localhost:3001/pokemons/${id}`)
        .then(res => {
            const data = res.data
            console.log(data);
            dispatch({ type: GET_PRODUCT, payload : data }) 
        })
        .catch(err => alert(err))
     }
};