import React from 'react';
import StoreItem from './StoreItem';
import styled from 'styled-components'

const StoreList = ({ storeList, addToShoppingCart }) => (
        <StoreContainer>
            {storeList.map( (item, index) => <StoreItem key={index} {...item} selectedItem={item} addToShoppingCart={addToShoppingCart}/> )}
        </StoreContainer>
    );

export default StoreList;

const StoreContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

`