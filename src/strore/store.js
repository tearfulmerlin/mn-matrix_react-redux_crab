import { createStore } from 'redux';
import { reducer } from './reducers';

const initialState = {
  rowCount: 0,
  columnCount: 0,
  nearestCount: 0,
  nearestCells: [],
  nums: [],
  loading: false,
  loaded: false,
  percentageRow: null,
};

export const store = createStore(reducer, initialState);

