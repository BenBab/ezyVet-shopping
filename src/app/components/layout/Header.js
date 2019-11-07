import React, {Component} from 'react';
import styled from 'styled-components'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component {

    render(){
        const { pathname } = this.props.history.location
        return (
            <ToolBar>
                <Title>EzyVet Shopping</Title>
                <NavigationItems>
                    <NavItem to="/" activepath={pathname}>Store <Icon className="fas fa-store-alt"/> </NavItem>
                    <NavItem to="/shopping-cart" activepath={pathname}>Shopping Cart <Icon className="fas fa-shopping-cart"/><Count>{this.props.shoppingCartCount}</Count></NavItem>
                    
                </NavigationItems>
            </ToolBar>
        );
    }
} 

const mapStateToProps = state => {
    return {
        shoppingCartCount: state.shoppingCart.shoppingCartCount
    }
}

export default connect(mapStateToProps)(withRouter(Header));

const Title = styled.h2`
    margin: 20px 10px;
`;

const Icon = styled.i`
    margin: 0 5px;
`;

const ToolBar = styled.header`
    display: flex;
    justify-content: space-between;
    background: linear-gradient(45deg, #455AB4, transparent);
    box-shadow: 0px 1px 15px grey;
    padding: 0 15px;
`

const NavigationItems = styled.div`
    display: flex;
    padding: 10px 20px;
    position: relative;
`;

const NavItem = styled(NavLink)`
    min-width: 100px;
    background: ${props => props.activepath === props.to ? 'rgba(69, 90, 180, .3)' : 'transparent' };
    border: 0;
    margin: 0 5px;
    padding: 0 10px;
    font-size: 1em;
    font-weight: bold;
    border-radius: 2px;
    display: flex;
    color: black;
    justify-content: center;
    align-items: center;

    &:hover {
        background: rgba(69, 90, 180, .3);
        cursor: pointer;
        text-decoration: none;
    }
`;



const Count = styled.div`
    /* position: absolute; */
    right: 0;
    border-radius: 50%;
    background-color: #0056b3;
    color: white;
    position: absolute;

    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 10px;
    right: 20px;
    font-size: 14px;
`;


