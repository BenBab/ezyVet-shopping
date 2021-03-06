import { connect } from 'react-redux'
import StoreList from '../../components/storeList/StoreList'
import * as actions from "../../../store/actions/index";

const mapStateToProps = state => {
    return {
        storeList: state.store.storeList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToShoppingCart: (selectedItem) => dispatch(actions.addToShoppingCart(selectedItem))
    };
  };

//assigns the relevant actions and redux state to be sent as props in the storeList
export default connect(mapStateToProps, mapDispatchToProps)(StoreList)