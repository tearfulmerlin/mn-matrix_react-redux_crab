import React from 'react';
import { connect } from 'react-redux';

import TableHead from './TableHead';
import TableFooter from './TableFooter';
import TableBody from './TableBody';

const MatrixTable = () => (
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

export default MatrixTable;
