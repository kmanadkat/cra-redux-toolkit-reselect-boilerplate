import { createSelector } from '@reduxjs/toolkit';
import { createStructuredSelector } from 'reselect';
import { get } from 'lodash';
import { initialState, name } from './slice';

// Select slice from store
const scoreSelector = (state) => state[name] || initialState;

// Slice Data
const makeScore = () =>
createSelector([scoreSelector], (state) => get(state, 'data', {}));

// Slice Loading Status
const makeScoreLoading = () =>
    createSelector([scoreSelector], (state) => state.loading);

// Slice Loaded Status
const makeScoreLoaded = () =>
    createSelector([scoreSelector], (state) => state.loaded);

// Slice Error Status
const makeScoreError = () =>
    createSelector([scoreSelector], (state) => state.error);

const structuredSelector = createStructuredSelector({
    scoreData: makeScore(),
    scoreLoading: makeScoreLoading(),
    scoreLoaded: makeScoreLoaded(),
    scoreError: makeScoreError()
});

export default structuredSelector;
