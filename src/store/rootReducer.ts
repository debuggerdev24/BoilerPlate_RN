import { combineReducers } from '@reduxjs/toolkit';
import dummyReducer from './slices/dummySlice';

const rootReducer = combineReducers({
    dummy: dummyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
