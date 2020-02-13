import {
  LOADING,
  LOADED,
  GENERATE_TABLE,
  ADD_ROW,
  REMOVE_ROW,
  INCREASE,
  DECREASE,
  SET_PERCENTAGE_ROW,
  SET_NEAREST_CELLS
} from '../constants';

export const loading = () => ({ type: LOADING });
export const loaded = () => ({ type: LOADED });
export const generateTable = tableVars => ({ type: GENERATE_TABLE, tableVars });
export const addRow = () => ({ type: ADD_ROW });
export const removeRow = rowIndex => ({ type: REMOVE_ROW, rowIndex });
export const increase = uuid => ({ type: INCREASE, uuid });
export const decrease = uuid => ({ type: DECREASE, uuid });
export const setPercentageRow = rowIndex => ({ type: SET_PERCENTAGE_ROW, rowIndex });
export const setNearestCells = cell => ({ type: SET_NEAREST_CELLS, cell });
