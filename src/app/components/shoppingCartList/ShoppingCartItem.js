import React from 'react';
import styled from 'styled-components'
import { Flex, Container} from '../UI/wrappers'

function ShoppingCartItem({ name, img, quantity, price, item, addToShoppingCart, minusFromShoppingCart, deleteFromShoppingCart }) {
    const parsedQuantity = quantity <= 0 ? 0 : quantity

    return (
        <CartItemWrapper>
            <Flex justifyContent='space-evenly' width='100%'>
                <div>
                    <ItemImage style={{ backgroundImage: `url(${img})`}} alt='placeholder'/>
                </div>
                <ItemName>{name}</ItemName>
                <Flex>
                    <ChangeQuantityIcon disabled={parsedQuantity === 0} className='fas fa-minus-circle' onClick={() => {
                        if (parsedQuantity === 0) return;
                        minusFromShoppingCart(item)}
                    } 
                    />
                    <Container textAlign='center'>
                        <div>{parsedQuantity}</div>
                        <small style={{fontSize:'10px'}}>Quantity</small>
                    </Container>
                    <ChangeQuantityIcon disabled={false} className='fas fa-plus-circle' onClick={() => addToShoppingCart(item)}/>
                </Flex>
                <Container textAlign='center'>
                    <div> ${(price * parsedQuantity).toFixed(2)}</div>
                    <small style={{fontSize:'10px'}}>Price</small>
                </Container>
            </Flex>
            <DeleteIcon className='fas fa-times-circle' onClick={() => deleteFromShoppingCart(item)}/>
        </CartItemWrapper>
    );
}

export default ShoppingCartItem;

const CartItemWrapper = styled.div`
    position: relative;
    display: flex;
    box-shadow: 1px 1px 20px 1px lightgrey;
    margin: 10px;
    font-size: 20px;
    max-width: 1000px;
    
`;

const ItemName = styled.div`
    width: 180px;
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
    color: ${props => props.disabled ? 'rgba(0,0,0,0.3)' : 'black'};

    &:hover{
        color: ${props => props.disabled ? 'rgba(0,0,0,0.3)' : '#0056b3'};
        cursor: ${props => props.disabled ? 'initial' : 'pointer'};
    }
`;

const DeleteIcon = styled.i`
    position:absolute;
    right: 0; 
    color: rgba(0,0,0,0.4);

    &:hover{
        cursor: pointer;
        color: red;
    }

`;