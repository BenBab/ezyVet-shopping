import React from 'react';
import ShoppingCartItem from './ShoppingCartItem'


const ShoppingCartList = ({ shoppingCartList, shoppingCartCount }) => {
    if (!shoppingCartCount && !shoppingCartList.length) return <div>There is nothing in your shopping cart..</div>

    return (
        <div>
            { shoppingCartList.map((item, i) => <ShoppingCartItem key={item._id} {...item} /> )}
        </div>
        
    )
};

export default ShoppingCartList;