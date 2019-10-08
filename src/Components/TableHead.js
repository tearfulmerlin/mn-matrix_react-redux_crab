import React from 'react';
import { connect } from 'react-redux';

const TableHead = ({ nums }) => (
  <thead>
    <tr>
      <th>Row</th>
      {nums[0].map((cell, cellIndex) => (
        <th key={cellIndex} >Column {cellIndex + 1}</th>
        ))}
        <th>Sum</th>
    </tr>
  </thead>
);

const mapStateToProps = state => ({
  nums: state.nums,
});

export default connect(mapStateToProps, null)(TableHead);
