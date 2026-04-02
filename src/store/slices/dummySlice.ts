import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface DummyState {
    data: Post | null;
    loading: boolean;
    error: string | null;
}

const initialState: DummyState = {
    data: null,
    loading: false,
    error: null,
};

const dummySlice = createSlice({
    name: 'dummy',
    initialState,
    reducers: {
        fetchDataRequest(state, action: PayloadAction<number>) {
            state.loading = true;
            state.error = null;
        },
        fetchDataSuccess(state, action: PayloadAction<Post>) {
            state.loading = false;
            state.data = action.payload;
        },
        fetchDataFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        postDataRequest(state, action: PayloadAction<{ title: string; body: string; userId: number }>) {
            state.loading = true;
            state.error = null;
        },
        postDataSuccess(state, action: PayloadAction<Post>) {
            state.loading = false;
            state.data = action.payload;
        },
        postDataFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchDataRequest,
    fetchDataSuccess,
    fetchDataFailure,
    postDataRequest,
    postDataSuccess,
    postDataFailure,
} = dummySlice.actions;

export default dummySlice.reducer;
