import React from 'react';
import { connect } from 'react-redux';

import TableRow from './TableRow'

const TableBody = ({ nums }) => (
  <tbody>
    {nums.map((row, rowIndex) => <TableRow row={row} rowIndex={rowIndex} />)}
  </tbody>
);


const mapStateToProps = state => ({
  nums: state.nums,
});

export default connect(mapStateToProps, null)(TableBody);
