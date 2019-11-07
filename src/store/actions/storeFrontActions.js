export const ADD_TODO = 'ADD_TODO';

export const LOAD_STORE_LIST = 'LOAD_STORE_LIST';
export const RENDER_STORE_LIST = 'RENDER_STORE_LIST';


export function addToDo(title) {
  return {
    type: ADD_TODO,
    storeItem: {
      _id: (new Date().getTime()).toString(),
      title
    }
  };
}


export function loadStoreFront() {
    return {
      type: LOAD_STORE_LIST
    };
  }