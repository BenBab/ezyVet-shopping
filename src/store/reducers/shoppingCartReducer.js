import { ADD_TO_SHOPPING_CART, RM_FROM_SHOPPING_CART } from '../actions/shoppingCartActions';

const initialState = {
  shoppingCartList: [],
  shoppingCartCount: 0
};

const checkExists = (state, action) => {
  return state.shoppingCartList.findIndex(i => i._id === action.storeItem._id )
}

const updateShoppingList = (state, action) => {
  let newStoreItem = {...action.storeItem, quantity: action.quantity}
  let newShoppingList = [...state.shoppingCartList]
  const existingItem = checkExists(state, action)
   //check if the item is already in the shopping cart or not
  if (existingItem === -1){
    newShoppingList = [...state.shoppingCartList, newStoreItem]
  }else {
    //if exists then update the quantity
    newShoppingList[existingItem].quantity = newShoppingList[existingItem].quantity + action.quantity
  }
  return newShoppingList
}

const countItemsInCart = (list) => {
  return list.reduce((acc, curr) => { return acc + curr.quantity } ,0)
}

export default function shoppingCartReducer(state = initialState, action) {
    switch (action.type) {
    case ADD_TO_SHOPPING_CART:
        const newShoppingList = updateShoppingList(state, action)
        // debugger
        return {
            ...state,
            shoppingCartList: newShoppingList,
            shoppingCartCount: countItemsInCart(newShoppingList)
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