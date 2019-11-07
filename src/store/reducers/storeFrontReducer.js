import { ADD_TODO, RENDER_STORE_LIST } from '../actions/storeFrontActions';

const initialState = {
  storeList: [],
};

export default function storeFrontReducer(state = initialState, action) {
    // debugger
    switch (action.type) {
    case ADD_TODO:
    let newToDoList = [...state.storeList, { ...action.storeItem }];
    return {
        ...state,
        storeList: newToDoList
    };
    case RENDER_STORE_LIST:
        return {
          ...state,
          storeList: action.storeList
        };
    default:
      return state;
  }
}