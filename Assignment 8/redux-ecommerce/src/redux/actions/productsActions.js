import shopApi from "../../api/shopApi";
import { ActionTypes } from "../constants/actionTypes"


export const fetchProducts = () =>{
    return async function(dispatch){
        try{
            const response = await shopApi.get('/products');

            dispatch({
                type: ActionTypes.FETCH_PRODUCTS,
                payload: response.data
            })
        }catch(err){
            console.log(err);
        }
    }
}


export const fetchProduct = id =>{
    return async function(dispatch){
        try{
            const response = await shopApi.get(`/products/${id}`);

            dispatch({
                type: ActionTypes.SELECT_PRODUCT,
                payload: response.data
            })
        }catch(err){
            console.log(err);
        }
    }
}

export const setProducts = products =>{
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectProduct = product =>{
    return {
        type: ActionTypes.SELECT_PRODUCT,
        payload: product
    }
}

export const removeSelectedproduct = () =>{
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    };
}