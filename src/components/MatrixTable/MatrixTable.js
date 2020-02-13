import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TableHead from './components/TableHead';
import TableFooter from './components/TableFooter';
import TableBody from './components/TableBody/TableBody';
import Actions from '../../strore/actions';

const MatrixTable = ({ nums, addRow }) => (
  <div className="table-container">
    <div className="table-wrapper">
      <table className="table">
        <TableHead nums={ nums }/>
        <TableFooter nums={ nums }/>
        <TableBody nums={ nums } addRow={ addRow } />
      </table>
    </div>
  </div>
);

const mapStateToProps = state => ({
  nums: state.nums,
});

const mapDispatchToProps = dispatch => ({
  addRow: () => dispatch(Actions.addRow()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MatrixTable);

MatrixTable.propTypes = {
  nums: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.object)
  ).isRequired,
  addRow: PropTypes.func.isRequired,
};
