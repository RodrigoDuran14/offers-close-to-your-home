import axios from "axios";
import { GET_PRODUCTS, GET_DETAIL } from './actions-type'

const BACK_HOST = 'http://localhost:3001'

// ========================* PRODUCTS *========================
export function createProduct(product) {
    console.log(`createProduct function (${product})`)

    return () => {
        axios.post(`${BACK_HOST}/products`, product)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }
}

export function getProducts() {
    return (dispatch) => {
        axios.get(`${BACK_HOST}/products`)
            .then(response => dispatch(
                {
                    type: GET_PRODUCTS,
                    payload: response.data
                }
            ))
            .catch(err => console.log(err))
    }
}

export function getDetail(id) {
    return (dispatch) => {
        axios.get(`${BACK_HOST}/products/${id}`)
            .then(response => dispatch(
                {
                    type: GET_DETAIL,
                    payload: response.data
                }
            ))
            .catch(err => console.log(err))
    }
}