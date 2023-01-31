import { combineReducers } from "redux"
import { ActionTypes } from "../constants/actionTypes"



const initialState = {
    products: [],
}

const productsReducer = (state=initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: payload
            };
        case ActionTypes.FETCH_PRODUCTS:
            return {
                ...state,
                products: payload
            };
        default:
            return state;
    }
}

const selectProductReducer = (state=initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SELECT_PRODUCT:
            return {
                ...state, 
                ...payload
            };

        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
            
        default:
            return state
    }
}

const reducer = combineReducers({
    allProducts: productsReducer,
    product: selectProductReducer,
})

export default reducer;