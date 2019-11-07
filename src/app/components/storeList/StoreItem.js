import React from 'react';
import styled from 'styled-components'
import { Container } from '../UI/wrappers'


const StoreItem = ({name, img, addToShoppingCart, selectedItem }) => (
    <ItemWrapper>
        <ItemImage style={{ backgroundImage: `url(${img})`}} alt='placeholder'/>
        <hr/>
        <Container margin='0 15px'><h5>{name}</h5></Container>
        <hr/>
        <Container textAlign='center' margin='15px'>
            <button onClick={() => { addToShoppingCart(selectedItem) }}>Add to cart</button>
        </Container>
    </ItemWrapper>
);

export default StoreItem;

const ItemWrapper = styled.div`
    box-shadow: 2px 2px 10px grey;
    border-radius: 2px;
    max-width: 300px;
    width: auto;
    margin: 20px;
    overflow: hidden;
`;

const ItemImage = styled.div`
    height: 150px;
    width: 300px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

