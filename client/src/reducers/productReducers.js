export const getAllProductsReducer = (state={products: []}, action)=>{
    switch(action.type){
        case 'GET_PRODUCTS_REQUEST': return{
            loading: true
        }
        case 'GET_PRODUCTS_SUCCESS': return{
            products: action.payload,
            loading: false
        }
        case 'GET_PRODUCTS_FAILED': return{
            error: action.payload,
            loading: false
        }
        default: return state
    }
}

export const getProductByIdReducer = (state={product: []}, action)=>{
    switch(action.type){
        case 'GET_PRODUCT_BY_ID_REQUEST': return{
            loading: true
        }
        case 'GET_PRODUCT_BY_ID_SUCCESS': return{
            product: action.payload,
            loading: false
        }
        case 'GET_PRODUCT_BY_ID_FAILED': return{
            error: action.payload,
            loading: false
        }
        default: return state
    }
}


export const addProductReviewReducer = (state={}, action)=>{
    switch(action.type){
        case 'ADD_PRODUCT_REVIEW_REQUEST': return{
            loading: true
        }
        case 'ADD_PRODUCT_REVIEW_SUCCESS': return{
            success: true,
            loading: false
        }
        case 'ADD_PRODUCT_REVIEW_FAILED': return{
            loading: false,
            error: true
        }
        default: return state
    }
}

