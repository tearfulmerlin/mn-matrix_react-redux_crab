import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Actions from '../Strore/store';
import TableRow from './TableRow';
import calcNearestNums from '../functions/calculators/calc-nearest';

const TableBody = ({ nums, addRow }) => (
  <tbody>
    {calcNearestNums(nums)}
    {nums.map((row, rowIndex) => (
      <React.Fragment key={rowIndex}>
        <TableRow row={row} rowIndex={rowIndex} />
      </React.Fragment>
    ))}
    <tr>
      <td className="table__add-row">
        <button
          type="button"
          className="table__add-btn"
          onClick={addRow}
        >
          Add row
        </button>
      </td>
    </tr>
  </tbody>
);


const mapStateToProps = state => ({
  nums: state.nums,
});

const mapDispatchToProps = dispatch => ({
  addRow: () => dispatch(Actions.addRow()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);

TableBody.propTypes = {
  nums: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.object)
  ).isRequired,
  addRow: PropTypes.bool.isRequired,
};
