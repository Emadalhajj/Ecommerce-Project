import { addtocard, deleleItem, quantity } from "../allAction";

const initionalState = {
  card: [],
};

const reducerCrad = (state = initionalState, action) => {
  switch (action.type) {
    case addtocard: {
      const product = action.payload;
      const exist = state.card.find((item) => item.id === product.id);
      if (exist) {
        return {
          ...state,
          card: state.card.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          card: [...state.card, { ...product, qty: 1 }],
        };
      }
    }
      case deleleItem:{
        const idToDelete = action.payload;
        return {
          ...state,
          card: state.card.filter((item) => item.id !== idToDelete),
        }
      }
      case quantity: {
        const { id, qty } = action.payload;
        console.log(" quantity  id:", id, "to:", qty);
        return{
          ...state,
          card: state.card.map((item) =>
            item.id === id ? { ...item, qty } : item
          ),

        }
      }


    default:
      return state;
  }
};
export default reducerCrad;
