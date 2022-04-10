import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  data: 0,
  loading: false,
  loaded: false,
  error: null
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    loadCounter(state) {
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null
      };
    },
    loadedCounter(_, action) {
      return {
        data: action.payload,
        loading: false,
        loaded: true,
        error: null
      };
    },
    errorCounter(state, action) {
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action.payload
      };
    },
    resetCounter() {
        return {...initialState}
    }
  }
});

export const {
    loadCounter,
    loadedCounter,
    errorCounter,
    resetCounter,
} = counterSlice.actions;

export const { name, reducer } = counterSlice;
