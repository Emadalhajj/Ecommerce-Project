import { showProduct } from "../allAction"

const initionlState = {
    productlist : []

}

const allproduct = (state = initionlState , action) =>{
    switch(action.type){
        case showProduct :  
            return {
                ...state,
                productlist : action.payload
            }
        default :
        return state
    }

}
export default allproduct