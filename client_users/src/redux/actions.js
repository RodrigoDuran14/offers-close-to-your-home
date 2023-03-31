import axios from "axios";

import { CREATE_PRODUCT } from './actions-type'

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