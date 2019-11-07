import React from 'react';
import styled from 'styled-components'
import { Container } from '../UI/wrappers'
import { Button } from '../UI/Button'
import { withSnackbar } from 'notistack'

const StoreItem = ({name, img, addToShoppingCart, selectedItem, enqueueSnackbar }) => (
    <ItemWrapper>
        <ItemImage style={{ backgroundImage: `url(${img})`}} alt='placeholder'/>
        <hr/>
        <Container margin='0 15px'><h5>{name}</h5></Container>
        <hr/>
        <Container textAlign='center' margin='15px'>
            <Button onClick={() => { 
                addToShoppingCart(selectedItem) 
                enqueueSnackbar(`Successfully added ${name} to the shopping cart`, { variant : 'success' })
                }}
            >Add to cart</Button>
        </Container>
    </ItemWrapper>
);

export default withSnackbar(StoreItem);

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

