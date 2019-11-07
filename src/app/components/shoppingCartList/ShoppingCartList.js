import React from 'react';
import ShoppingCartItem from './ShoppingCartItem'
import styled from'styled-components'
import { Container, Flex } from '../UI/wrappers'


const ShoppingCartList = ({ shoppingCartList, shoppingCartCount, addToShoppingCart, minusFromShoppingCart, deleteFromShoppingCart }) => {
    if (!shoppingCartCount && !shoppingCartList.length) return <div>There is nothing in your shopping cart..</div>

    debugger;
    return (
        <div>
            { shoppingCartList.map((item, i) => <ShoppingCartItem key={item._id} {...item} item={item} addToShoppingCart={addToShoppingCart}  minusFromShoppingCart={minusFromShoppingCart} deleteFromShoppingCart={deleteFromShoppingCart}/> )}
            <TotalPrice>
                <small>TOTAL</small>
                <Container margin='0 20px 0 20%'>
                    <Flex justifyContent={'flex-end'}>
                        <DollarIcon className={'fas fa-dollar-sign'}/>
                        {shoppingCartList.reduce((acc, curr) => {return acc + (curr.price * curr.quantity)},0).toFixed(2)}
                    </Flex>
                    <button>Checkout</button>
                </Container>
            </TotalPrice>
        </div>
        
    )
};

export default ShoppingCartList;

const TotalPrice = styled.div`
    display: flex;
    font-size: 35px;
    justify-content: flex-end;
    max-width: 1000px;
`;

const DollarIcon = styled.div`
    margin : 0 20px 0 0;
`;