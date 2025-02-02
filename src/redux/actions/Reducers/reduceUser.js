
import { addUser, error, isLoggedIn, logOut, regiter } from "../allAction"

const initionlState = {
    user : JSON.parse(localStorage.getItem('user'))  || null ,
    isLoggedIn : false ,
    error : null
}

const logIn = (state = initionlState , action)=> {
    switch(action.type){
        case addUser :
           return {
            ...state , 
            user : action.payload,
            isLoggedIn : true

           };
        case regiter :
           
            return{
                ...state,
                user : action.payload
            };
    
        case error :
            return{
                ...state ,
                error : action.payload
            };
        case logOut :
            localStorage.removeItem("users")
            // localStorage.setItem("isLoggedIn" , false)
            return{
                user : null,
                isLoggedIn : false
            }


        
           default :
           return state
    }

}

export default logIn