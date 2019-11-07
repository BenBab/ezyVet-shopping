import { connect } from 'react-redux'
import ShoppingCartList from '../../components/shoppingCartList/ShoppingCartList'
import * as actions from "../../../store/actions/index";

const mapStateToProps = state => {
    return {
        shoppingCartList: state.shoppingCart.shoppingCartList,
        shoppingCartCount: state.shoppingCart.shoppingCartCount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToShoppingCart: (selectedItem) => dispatch(actions.addToShoppingCart(selectedItem))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps )(ShoppingCartList)