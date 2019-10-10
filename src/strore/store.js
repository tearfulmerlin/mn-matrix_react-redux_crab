import { createStore } from 'redux';

import tableGenerator from '../functions/generators/table-generator';
import rowGenerator from '../functions/generators/row-generator';
import calcNearestNums from '../functions/calculators/calc-nearest';

const LOADING = 'LOADING';
const LOADED = 'LOADED';

const GENERATE_TABLE = 'GENERATE_TABLE';
const ADD_ROW = 'ADD_ROW';
const REMOVE_ROW = 'REMOVE_ROW';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const SET_PERCENTAGE_ROW = 'SET_PERCENTAGE_ROW';
const SET_NEAREST_CELLS = 'SET_NEAREST_CELLS';

export const loading = () => ({ type: LOADING });
export const loaded = () => ({ type: LOADED });

export const generateTable = tableVars => ({ type: GENERATE_TABLE, tableVars });
export const addRow = () => ({ type: ADD_ROW });
export const removeRow = rowIndex => ({ type: REMOVE_ROW, rowIndex });
export const increase = uuid => ({ type: INCREASE, uuid });
export const decrease = uuid => ({ type: DECREASE, uuid });
export const setPercentageRow = rowIndex => ({ type: SET_PERCENTAGE_ROW, rowIndex });
export const setNearestCells = cell => ({ type: SET_NEAREST_CELLS, cell });

const initialState = {
  rowCount: null,
  columnCount: null,
  nearestCount: null,
  nearestCells: [],
  nums: [],
  startLoading: false,
  finishLoading: false,
  percentageRow: null,
};

const reducer = (state, action) => {
  switch (action.type) {
  case LOADING:
    return {
      ...state,
      loading: true,
      loaded: false,
    };

  case LOADED:
    return {
      ...state,
      loading: false,
      loaded: true,
    };

  case GENERATE_TABLE:
    return {
      ...state,
      nearestCount: action.tableVars.nearestCount,
      rowCount: action.tableVars.rowCount,
      columnCount: action.tableVars.columnCount,
      nums: tableGenerator(action.tableVars),
    };

  case ADD_ROW:
    return {
      ...state,
      nums: [...state.nums, rowGenerator(state.columnCount)],
    };

  case REMOVE_ROW:
    return {
      ...state,
      nums: state.nums
        .filter((row, rowIndex) => rowIndex !== action.rowIndex),
    };

  case INCREASE:
    return {
      ...state,
      nums: state.nums
        .map(row => row.map(cell => cell.uuid !== action.uuid
          ? cell
          : { ...cell, value: cell.value + 1 }
        )),
    };

  case DECREASE:
    return {
      ...state,
      nums: state.nums
        .map(row => row.map(cell => cell.uuid !== action.uuid
          ? cell
          : { ...cell, value: cell.value - 1 }
        )),
    };

  case SET_PERCENTAGE_ROW:
    return {
      ...state,
      percentageRow: action.rowIndex,
    };

  case SET_NEAREST_CELLS:
    return {
      ...state,
      nearestCells: calcNearestNums(state.nums, state.nearestCount, action.cell),
    };

  default:
    return state;
  }
};

const store = createStore(reducer, initialState);

export default store;
