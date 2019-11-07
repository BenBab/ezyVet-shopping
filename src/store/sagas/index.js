import { all, put, takeEvery } from 'redux-saga/effects';
import { LOAD_STORE_LIST, RENDER_STORE_LIST } from '../actions/storeFrontActions';
import { products } from '../../app/constants'

//Normally used to fetch the data from an endpoint, but we have it locally in this example

export function* fetchStoreList() {
  // const endpoint = 'https://gist.githubusercontent.com/brunokrebs/f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json';
  // const response = yield call(fetch, endpoint);
  // const data = yield response.json();
  const data = products
  yield put({ type: RENDER_STORE_LIST, storeList: data });
}

export function* loadStoreList() {
  yield takeEvery(LOAD_STORE_LIST, fetchStoreList);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([ loadStoreList(), ]);
}