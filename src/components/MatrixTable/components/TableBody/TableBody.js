import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '../TableRow/TableRow';

const TableBody = ({ nums, addRow }) => (
  <tbody>
    {nums.map((row, rowIndex) => (
      <React.Fragment key={ rowIndex }>
        <TableRow row={ row } rowIndex={ rowIndex } />
      </React.Fragment>
    ))}
    <tr>
      <td className="table__add-row">
        <button
          type="button"
          className="table__add-btn"
          onClick={ addRow }
        >
          Add row
        </button>
      </td>
    </tr>
  </tbody>
);


export default TableBody;

TableBody.propTypes = {
  nums: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.object)
  ).isRequired,
  addRow: PropTypes.func.isRequired,
};
