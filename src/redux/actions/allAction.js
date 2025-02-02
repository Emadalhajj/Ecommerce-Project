//ACTION TYPE
export const addUser = "ADD_USER";
export const regiter = "SAIGN_UP";
export const isLoggedIn = "ISLOGGEDIN";
export const error = "ERROR";
export const logOut = "LOGOUT";

export const showProduct = "SHOWPRODUCT"

export const detialsProducts = "DETIALSPRODUCTS"
export const setProductsList = "SETPRODUCTSLIST"


export const addtocard = "ADDTOCARD"
export const deleleItem = "DELETEITEM"
export const quantity = "QUANTITY"


//ACTION CREATEOR

export const UserSing = (email, password) => {

  return {
    type: addUser,
    payload: email, password
  }

  // const storeduser = JSON.parse(localStorage.getItem("users")) || [];

  // const foundUser = storeduser.find(
  //   (user)=> user.email === email && user.password === password)
  // if (foundUser) {
  //     return {
  //       type: addUser,
  //       payload: storeduser,
  //     }
  //   }else{
  //       return {
  //           type : error,
  //           payload : "Invalid email or password"
  //       }
  //   }
  
}

export const RegisterUser = (userName, email, password) => {
    const newUser = { userName, email, password };
  
    // استرجاع المستخدمين الحاليين من localStorage
    let storedUsers = JSON.parse(localStorage.getItem('users')) || []

    // إذا لم تكن storedUsers مصفوفة، قم بتعيينها إلى مصفوفة فارغة
  if (!Array.isArray(storedUsers)) {
    storedUsers = [];
  }
    
    // إضافة المستخدم الجديد إلى القائمة
    storedUsers.push(newUser);
  
    console.log("Users to store:", storedUsers);
  
    // تخزين المستخدمين المحدثين في localStorage
    localStorage.setItem("users", JSON.stringify(storedUsers));
  
    return {
      type: regiter,
      payload: newUser,
    };
  };
export const LoggedIn = () => {
  return {
    type: isLoggedIn,
  };
};

export const setError = (errorMessage) => {
  return {
    type: error,
    payload: errorMessage,
  };
};

export const setlogOut = () =>{
  return {
    type : logOut
  }

}
//action ceatetor
export const fetchDataAPI = () =>{
  return async (dispatch)=>{
    try{
      const response = await fetch('https://fakestoreapi.com/products') 
      const data = await response.json()
      dispatch({
        type : showProduct,
        payload : data
      })
  
    }
    catch (error){
      console.error('fild fetch api' , error)
      
    }
  }
}

//action ceatetor details

export const handleShowDetails = (id)=>{
  return {
    type : detialsProducts,
    payload : id
  } 
}

export const handlesetProductsList = (items) =>{
    return{
      type : setProductsList,
      payload : items
    }
}

//action createtor 
//addtocard
export const handleAddtocard = (product) =>{
  return{
    type : addtocard,
    payload : product
  }

}
//Remove
export const handleRemoveFcard = (id) =>{
  return{
    type : deleleItem,
    payload : id
  }
}

export const updateQuantity = (id , qty)=>{
  return{
    type : quantity,
    payload : {id , qty}
  }
}