import { createSelector } from '@reduxjs/toolkit';
import { get } from 'lodash';
import { createStructuredSelector } from 'reselect';
import { initialState, name } from './slice';

// Select slice from store
const counterSelector = (state) => state[name] || initialState;

// Slice Data
const makeCounter = () =>
createSelector([counterSelector], (state) => get(state, 'data', {}));

// Slice Loading Status
const makeCounterLoading = () =>
  createSelector([counterSelector], (state) => state.loading);

// Slice Loaded Status
const makeCounterLoaded = () =>
  createSelector([counterSelector], (state) => state.loaded);

// Slice Error Status
const makeCounterError = () =>
  createSelector([counterSelector], (state) => state.error);

const structuredSelector = createStructuredSelector({
  counterData: makeCounter(),
  counterLoading: makeCounterLoading(),
  counterLoaded: makeCounterLoaded(),
  counterError: makeCounterError()
});

export default structuredSelector;
