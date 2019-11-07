import React from 'react';
import './App.css';
import styled from 'styled-components'
import StoreFrontContainer from './containers/storeFront/StoreContainer';
import ShoppingCartList from './containers/shoppingCart/ShoppingCartContainer'

// import AddToStore from './containers/storeFront/AddToStore';

import { Route, Switch } from "react-router-dom";
import Header from './components/layout/Header'


function App() {
  return (
    <div>
      <Header/>
      <Container>
        <Switch>
          <Route exact path="/" component={StoreFrontContainer}/>
          <Route exact path="/shopping-cart" component={ShoppingCartList}/>
          {/* <Route exact path="/addToStore" component={AddToStore}/> */}
        </Switch>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div `
    padding: 20px 30px;
`;
