import { detialsProducts , setProductsList } from "../allAction"

const initionalState = 
{
    selectedProduct: null,
    productList : [] , 
    views : {}
}

const reducerDetials = (state = initionalState , action)=>{
    switch(action.type) {
        case setProductsList :
            return {
                ...state,
                productList: action.payload,
              };

        case detialsProducts :
            const selectedProduct = state.productList.find(
                (product)=> product.id === action.payload) || null;

            return {
                ...state ,
                selectedProduct  

            }

        default : 
        return state
    }
}

export default reducerDetials