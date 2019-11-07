import React from 'react';
import ShoppingCartItem from './ShoppingCartItem'


const ToDoList = ({ shoppingCartList, shoppingCartCount }) => {
    if (!shoppingCartCount) return <div>There is nothing in your shopping cart..</div>

    return (
        <div>
            { shoppingCartList.map((item, i) => <ShoppingCartItem /> )}
        </div>
        
    )
};

export default ToDoList;