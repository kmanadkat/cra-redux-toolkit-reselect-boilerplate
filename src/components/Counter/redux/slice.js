import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    data: null,
    loading: false,
    loaded: false,
    error: null
};

const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
    loadScore(state) {
        return {
        ...state,
        loading: true,
        loaded: false,
        error: null
        };
    },
    loadedScore(_, action) {
        return {
        data: action.payload,
        loading: false,
        loaded: true,
        error: null
        };
    },
    errorScore(state, action) {
        return {
        ...state,
        loading: false,
        loaded: true,
        error: action.payload
        };
    },
    resetScore() {
        return {...initialState}
    }
    }
});

export const {
    loadScore,
    loadedScore,
    errorScore,
    resetScore,
} = scoreSlice.actions;

export const { name, reducer } = scoreSlice;
