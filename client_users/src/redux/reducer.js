import { FILTER_PRICE, FILTER_CONDITION } from "./actions-type";

const initialState = {
  products: [],
  product: [],
  category: [],
  filtered: false,
};

export default function rootReducer(state = initialState, action) {
  if (action.type === FILTER_PRICE) {
    const allProducts = [...state.products];
    allProducts.sort((a, b) => {
      let ratingA = a.rating;
      let ratingB = b.rating;

      let ratingANumber;
      let ratingBNumber;

      if (typeof ratingA === "object") {
        ratingANumber = Number(ratingA);
      } else {
        ratingANumber = Number(ratingA);
      }

      if (typeof ratingB === "object") {
        ratingBNumber = Number(ratingB);
      } else {
        ratingBNumber = Number(ratingB);
      }

      if (action.payload === "Asc") {
        if (ratingANumber === ratingBNumber) {
          return 0;
        } else if (ratingANumber < ratingBNumber) {
          return -1;
        }
        return 1;
      }
      if (action.payload === "Des") {
        if (ratingANumber === ratingBNumber) {
          return 0;
        } else if (ratingANumber < ratingBNumber) {
          return 1;
        }
        return -1;
      }
    });
    return {
      ...state,
      products: allProducts,
      filtered: true,
    };
  }
  /* -------------------------------------------ESTADO BASE------------------------------------------- */
  return state;
}
