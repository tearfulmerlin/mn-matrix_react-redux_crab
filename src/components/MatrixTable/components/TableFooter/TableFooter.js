import React from 'react';
import PropTypes from 'prop-types';
import calcAverage from '../../../../utils/calculators/calc-average';

const TableFooter = ({ nums }) => (
  <tfoot>
    <tr>
      <td>Average</td>
      {nums[0].map((cell, cellIndex) => (
        <td key={ cellIndex }>{calcAverage(nums, cellIndex)}</td>
      ))}
      <td>{''}</td>
    </tr>
  </tfoot>
);

export default TableFooter;

TableFooter.propTypes = {
  nums: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.object)
  ).isRequired,
};
