import { all } from 'redux-saga/effects';
import dummySaga from './sagas/dummySaga';

export default function* rootSaga() {
    yield all([dummySaga()]);
}
