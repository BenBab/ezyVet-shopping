import React from 'react';
import ShoppingCartItem from './ShoppingCartItem'


const ShoppingCartList = ({ shoppingCartList, shoppingCartCount, addToShoppingCart, minusFromShoppingCart, deleteFromShoppingCart }) => {
    if (!shoppingCartCount && !shoppingCartList.length) return <div>There is nothing in your shopping cart..</div>

    return (
        <div>
            { shoppingCartList.map((item, i) => <ShoppingCartItem key={item._id} {...item} item={item} addToShoppingCart={addToShoppingCart}  minusFromShoppingCart={minusFromShoppingCart} deleteFromShoppingCart={deleteFromShoppingCart}/> )}
        </div>
        
    )
};

export default ShoppingCartList;