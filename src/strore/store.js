import { createStore } from 'redux';

import tableGenerator from '../functions/generators/table-generator';

const LOADING = 'LOADING';
const LOADED = 'LOADED';

const GENERATE_TABLE = 'GENERATE_TABLE';
const ADD_ROW = 'ADD_ROW';
const REMOVE_ROW = 'REMOVE_ROW';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const SHOW_PERCENTAGE = 'SHOW_PERCENTAGE';
const SHOW_NEAREST = 'SHOW_NEAREST';

export const loading = () => ({ type: LOADING });
export const loaded = () => ({ type: LOADED });

export const generateTable = tableVars => ({ type: GENERATE_TABLE, tableVars });
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
      nums: tableGenerator(action.tableVars),
    };

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
