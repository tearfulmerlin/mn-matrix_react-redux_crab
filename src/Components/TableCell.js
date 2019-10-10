import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Actions from '../Strore/store';

const TableCell = ({ cell, increase, decrease, setNearestCells, rowSum }) => {
  const percentageValue = Math.round(cell.value / rowSum * 10000) / 100;

  return (
    <td
      className={`table__cell ${cell.nearest ? 'nearest': ''} `}
      onClick={() => increase(cell.uuid)}
      onContextMenu={(event) => {
        event.preventDefault();
        decrease(cell.uuid);
      }}

    >
      <div
        className="table__cell-container"
        onMouseOver={() => setNearestCells(cell)}
        onMouseLeave={() => setNearestCells(null)}
      >
        <span className="table__cell-absolut">
          {cell.value}
        </span>

        <div className="table__cell-percentage" >
          <div className="chart" style={{ height: `${percentageValue}%` }} />
          {`${percentageValue}%`}
        </div>

      </div>
    </td>
  );
};

const mapDispatchToProps = dispatch => ({
  increase: uuid => dispatch(Actions.increase(uuid)),
  decrease: uuid => dispatch(Actions.decrease(uuid)),
  setNearestCells: cell => dispatch(Actions.setNearestCells(cell)),
});

export default connect(null, mapDispatchToProps)(TableCell);

TableCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.number.isRequired,
    uuid: PropTypes.string.isRequired,
  }).isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
  rowSum: PropTypes.number.isRequired,
};
