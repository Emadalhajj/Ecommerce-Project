import { configureStore } from "@reduxjs/toolkit";

import authSlices from "./auth/authSlice";
import authReducer, { loadUser } from "./auth/authSlice";
import cardsSlice from "./cart/cartSlice";
import favoritesSlice from "./favorites/favoritesSlice";
import { Favorite } from "@mui/icons-material";

// import cardsSlice from "../RTK/Cards";

const store = configureStore({
  reducer: {
 
    auth: authSlices,
    card: cardsSlice,
    favorite: favoritesSlice,
  },
});
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (currentUser) {
  store.dispatch(loadUser(currentUser.email));
}

export default store;
