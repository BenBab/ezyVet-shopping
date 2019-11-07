import { ADD_TO_SHOPPING_CART, RM_FROM_SHOPPING_CART } from '../actions/shoppingCartActions';

const initialState = {
  shoppingCartList: [],
  shoppingCartCount: 0
};

export default function shoppingCartReducer(state = initialState, action) {
    // debugger
    switch (action.type) {
    case ADD_TO_SHOPPING_CART:
        let newShoppingList = [...state.shoppingCartList, { ...action.storeItem }];
        return {
            ...state,
            shoppingCartList: newShoppingList,
            shoppingCartCount: newShoppingList.length
        };
    case RM_FROM_SHOPPING_CART:
        return {
          ...state,
          shoppingCartList: action.storeList
        };
    default:
      return state;
  }
}