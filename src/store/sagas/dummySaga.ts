import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import {
    fetchDataRequest,
    fetchDataSuccess,
    fetchDataFailure,
    postDataRequest,
    postDataSuccess,
    postDataFailure,
} from '../slices/dummySlice';
import { getPost, createPost } from '../../services/api';

function* fetchDataSaga(action: PayloadAction<number>) {
    try {
        const response: AxiosResponse = yield call(getPost, action.payload);
        yield put(fetchDataSuccess(response.data));
    } catch (error: any) {
        yield put(fetchDataFailure(error.message));
    }
}

function* postDataSaga(action: PayloadAction<{ title: string; body: string; userId: number }>) {
    try {
        const response: AxiosResponse = yield call(createPost, action.payload);
        yield put(postDataSuccess(response.data));
    } catch (error: any) {
        yield put(postDataFailure(error.message));
    }
}

export default function* dummySaga() {
    yield takeLatest(fetchDataRequest.type, fetchDataSaga);
    yield takeLatest(postDataRequest.type, postDataSaga);
}
