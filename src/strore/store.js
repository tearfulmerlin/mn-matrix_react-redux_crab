import { createStore } from 'redux';
// import { rowGenerator } from '../api/serviceFunctions';

const SET_ROWS = 'SET_ROWS';
const SET_COLUMNS = 'SET_COLUMNS';
const SET_NEAREST_COUNT = 'SET_NEAREST_COUNT';
const START_LOADING = 'START_LOADING';
const FINISH_LOADING = 'FINISH_LOADING';

const SET_NUMS = 'SET_NUMS';
const ADD_ROW = 'ADD_ROW';
const REMOVE_ROW = 'REMOVE_ROW';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const SHOW_PERCENTAGE = 'SHOW_PERCENTAGE';
const SHOW_NEAREST = 'SHOW_NEAREST';

export const setRowsCount = rowCount => ({ type: SET_ROWS, rowCount });
export const setColumnCount = columnCount => ({ type: SET_COLUMNS, columnCount });
export const setNearestCount = nearestCount => ({ type: SET_NEAREST_COUNT, nearestCount });
export const startLoading = () => ({ type: START_LOADING });
export const finishLoading = () => ({ type: FINISH_LOADING });

export const setNums = nums => ({ type: SET_NUMS, nums });
export const addRow = nums => ({ type: ADD_ROW, nums });
export const removeRow = rowIndex => ({ type: REMOVE_ROW, rowIndex });
export const increase = uuid => ({ type: INCREASE, uuid });
export const decrease = uuid => ({ type: DECREASE, uuid });
export const showPercentage = rowIndex => ({ type: SHOW_PERCENTAGE, rowIndex });
export const showNearest = uuid => ({ type: SHOW_NEAREST, uuid });

const initialState = {
  rowCount: null,
  columnCount: null,
  nearestCount: null,
  nums: [],
  startLoading: false,
  finishLoading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_ROWS:
      return

    case SET_COLUMNS:
      return

    case SET_NEAREST_COUNT:
      return

    case START_LOADING:
      return

    case FINISH_LOADING:
      return

    case SET_NUMS:
      return

    case ADD_ROW:
      return

    case REMOVE_ROW:
      return

    case INCREASE:
      return

    case DECREASE:
      return

    case SHOW_PERCENTAGE:
      return

    case SHOW_NEAREST:
      return

    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;
