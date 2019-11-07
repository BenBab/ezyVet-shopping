export const ADD_TO_SHOPPING_CART = 'ADD_TO_SHOPPING_CART'
export const MINUS_FROM_SHOPPING_CART = 'MINUS_FROM_SHOPPING_CART'
export const RM_FROM_SHOPPING_CART = 'RM_FROM_SHOPPING_CART'


export function addToShoppingCart(selectedItem) {
    return {
      type: ADD_TO_SHOPPING_CART,
      storeItem: selectedItem,
      quantity: 1
    };
  }

export function minusFromShoppingCart(selectedItem) {
  return {
    type: MINUS_FROM_SHOPPING_CART,
    storeItem: selectedItem,
    quantity: -1
  };
}

export function deleteFromShoppingCart(selectedItem) {
  return {
    type: RM_FROM_SHOPPING_CART,
    storeItem: selectedItem,
  };
}