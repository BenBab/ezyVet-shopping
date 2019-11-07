import React from 'react';
import './App.css';
import styled from 'styled-components'
import StoreFrontContainer from './containers/storeFront/StoreContainer';
import ShoppingCartList from './containers/shoppingCart/ShoppingCartContainer'

import { Route, Switch } from "react-router-dom";
import Header from './components/layout/Header'


function App() {
  return (
    <div>
      <Header/>
      <AppContainer >
        <Switch>
          <Route exact path="/" component={StoreFrontContainer}/>
          <Route exact path="/shopping-cart" component={ShoppingCartList}/>
        </Switch>
      </AppContainer>
    </div>
  );
}

export default App;

const AppContainer = styled.div `
    padding: 20px 30px;
`;
