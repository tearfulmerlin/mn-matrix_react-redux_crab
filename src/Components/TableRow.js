import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../Strore/store';
import calcSum from '../functions/calculators/calc-sum';
import TableCell from './TableCell';

const TableRow = ({
  row,
  rowIndex,
  removeRow,
  percentageRow,
  setPercentageRow
}) => {
  const rowSum = calcSum(row);

  return (
    <tr className={
      rowIndex === percentageRow && 'table__row--show-percentage'
    }>
      <td className="table__row-name" onClick={() => removeRow(rowIndex)}>
        <span className="table__row-title">Row {rowIndex + 1}</span>
        <span className="table__row-action">Remove row</span>
      </td>
      {row.map(cell => (
        <TableCell
          cell={cell}
          rowSum={rowSum}
          key={cell.uuid}
        />
      ))}
      <td
        onMouseOver={() => {
          console.log('over', rowIndex);
          setPercentageRow(rowIndex)}}
        onMouseLeave={() => setPercentageRow(null)}
      >
        {rowSum}
      </td>
    </tr>
  );
};

const mapStateToProps = state => ({
  percentageRow: state.percentageRow,
});

const mapDispatchToProps = dispatch => ({
  removeRow: rowIndex => dispatch(Actions.removeRow(rowIndex)),
  setPercentageRow: rowIndex => dispatch(Actions.setPercentageRow(rowIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableRow);
