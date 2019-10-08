import React from 'react';
import { connect } from 'react-redux';

import calcAverage from '../functions/calculators/calc-average';

const TableFooter = ({ nums }) => (
  <tfoot>
    <tr>
      <td>Average</td>
      {nums[0].map((cell, cellIndex) => (
        <td>{calcAverage(nums, cellIndex)}</td>
      ))}
    </tr>
  </tfoot>
);

const mapStateToProps = state => ({
  nums: state.nums,
});

export default connect(mapStateToProps, null)(TableFooter);
