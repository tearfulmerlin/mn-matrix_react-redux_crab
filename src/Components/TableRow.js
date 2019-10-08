import React from 'react';
import TableCell from './TableCell';

const TableRow = ({ row, rowIndex }) => (
  <tr>
    <td>Row {rowIndex + 1}</td>
    {row.map(cell => <TableCell cell={cell} key={cell.uuid} />)}
    <td>{row.reduce((a, {value}) => a.value + value || a + value)}</td>
  </tr>
);


const mapStateToProps = state => ({
  nums: state.nums,
});

export default TableRow;
