import React from 'react';
import { connect } from 'react-redux';

import TableHead from './TableHead';
import TableFooter from './TableFooter';
import TableBody from './TableBody';

const MatrixTable = ({ nums }) => (
  <div className="table-container">
    <div className="table-wrapper">
      <table className="table">
        <TableHead />
        <TableFooter />
        <TableBody />
      </table>
    </div>
  </div>
);

const mapStateToProps = state => ({
  nums: state.nums,
});

export default connect(mapStateToProps, null)(MatrixTable);
