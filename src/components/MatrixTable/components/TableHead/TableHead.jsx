import React from 'react';
import PropTypes from 'prop-types';

const TableHead = ({ nums }) => (
  <thead>
    <tr>
      <th>Row</th>
      {nums[0].map((cell, cellIndex) => (
        <th key={ cellIndex } >Column {cellIndex + 1}</th>
      ))}
      <th>Sum</th>
    </tr>
  </thead>
);

export default TableHead;

TableHead.propTypes = {
  nums: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.object)
  ).isRequired,
};
