import { call, put, takeEvery } from 'redux-saga/effects';
import { getPhonesSuccess } from './phoneState';

function* workGetPhonesFetch() {
  const mobiles = yield call(() =>
    fetch('https://dummyjson.com/products').then((res) => res.json())
  );

  yield put(getPhonesSuccess(mobiles));
}

function* phonesSaga() {
  yield takeEvery('phones/getPhonesFetch', workGetPhonesFetch);
}

export default phonesSaga;
