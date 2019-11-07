import React from 'react';
import styled from 'styled-components'
import { Flex, Container} from '../UI/wrappers'

function ShoppingCartItem({ name, img, quantity, price}) {
    const parsedQuantity = quantity <= 0 ? 0 : quantity

    return (
        <CartItemWrapper>
            <Flex justifyContent='space-evenly' width='100%'>
                <div>
                    <ItemImage style={{ backgroundImage: `url(${img})`}} alt='placeholder'/>
                </div>
                <div>{name}</div>
                <Flex>
                    <ChangeQuantityIcon className='fas fa-minus-circle'/>
                    <Container textAlign='center'>
                        <div>{parsedQuantity}</div>
                        <small style={{fontSize:'10px'}}>Quantity</small>
                    </Container>
                    <ChangeQuantityIcon className='fas fa-plus-circle'/>
                </Flex>
                <div>
                    ${(price * parsedQuantity).toFixed(2)}
                </div>
            </Flex>
        </CartItemWrapper>
    );
}

export default ShoppingCartItem;

const CartItemWrapper = styled.div`
    display: flex;
    box-shadow: 1px 1px 20px 1px lightgrey;
    margin: 10px;
    font-size: 20px;
    max-width: 1000px;
    
`;

const ItemImage = styled.div`
    height: 150px;
    width: 150px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    padding: 20px; 
    margin: 20px;
`;

const ChangeQuantityIcon = styled.i`
    margin: 0 20px;
`;