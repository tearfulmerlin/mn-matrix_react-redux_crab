import {
  ADD_ROW,
  DECREASE,
  GENERATE_TABLE,
  INCREASE,
  LOADED,
  LOADING,
  REMOVE_ROW, SET_NEAREST_CELLS,
  SET_PERCENTAGE_ROW
} from '../constants';
import tableGenerator from '../../utils/generators/table-generator';
import rowGenerator from '../../utils/generators/row-generator';
import calcNearestNums from '../../utils/calculators/calc-nearest';

export const reducer = (state, action) => {
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
      nums: calcNearestNums(state.nums, state.nearestCount, action.cell),
    };

  default:
    return state;
  }
};
