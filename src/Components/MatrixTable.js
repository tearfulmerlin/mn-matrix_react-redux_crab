import React from 'react';
import { connect } from 'react-redux';

const MatrixTable = ({ nums }) => (
  nums.map(row => <li>{row[0].value}, {row[0].uuid}</li>)
);

const mapStateToProps = state => ({
  nums: state.nums,
});

export default connect(mapStateToProps, null)(MatrixTable);
