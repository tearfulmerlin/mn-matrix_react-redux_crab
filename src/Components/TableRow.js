import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../Strore/store';
import calcSum from '../functions/calculators/calc-sum';
import TableCell from './TableCell';

const TableRow = ({ row, rowIndex, removeRow }) => {
  const rowSum = calcSum(row);
  return (
    <tr>
      <td className="table__row-name" onClick={() => removeRow(rowIndex)}>
        <span className="table__row-title">Row {rowIndex + 1}</span>
        <span className="table__row-action">Remove row</span>
      </td>
      {row.map(cell => <TableCell cell={cell} key={cell.uuid} />)}
      <td>{rowSum}</td>
    </tr>
  );
};

const mapDispatchToProps = dispatch => ({
  removeRow: rowIndex => dispatch(Actions.removeRow(rowIndex)),
});

export default connect(null, mapDispatchToProps)(TableRow);
