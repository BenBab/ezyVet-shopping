export const ADD_TO_SHOPPING_CART = 'ADD_TO_SHOPPING_CART'
export const RM_FROM_SHOPPING_CART = 'RM_FROM_SHOPPING_CART'


export function addToShoppingCart(selectedItem) {
    return {
      type: ADD_TO_SHOPPING_CART,
      storeItem: selectedItem
    };
  }