import { RENDER_STORE_LIST } from '../actions/storeFrontActions';

const initialState = {
  storeList: [],
};

export default function storeFrontReducer(state = initialState, action) {
    // debugger
    switch (action.type) {
    case RENDER_STORE_LIST:
        return {
          ...state,
          storeList: action.storeList
        };
    default:
      return state;
  }
}