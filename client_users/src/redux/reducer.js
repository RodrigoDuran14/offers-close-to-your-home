import { GET_PRODUCTS, GET_DETAIL } from './actions-type'

const initialState = {
    products: [],
    detail: {}
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            }
        default:
            return state
    }
}