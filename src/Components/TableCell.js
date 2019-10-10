import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Actions from '../Strore/store';

const TableCell = ({ cell, increase, decrease, nearestCells,setNearestCells, rowSum }) => {
  const percentageValue = Math.round(cell.value / rowSum * 10000) / 100;

  return (
    <td
      // className={`table__cell ${nearestCells.indexOf(cell.value)}`}
      onClick={() => increase(cell.uuid)}
      onContextMenu={(event) => {
        event.preventDefault();
        decrease(cell.uuid);
      }}
      onMouseOver={() => increase(cell.uuid)}
      onMouseLeave={() => increase(cell.uuid)}
    >
      <div className="table__cell-container">
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

const mapStateToProps = state => ({
  nearestCells: state.nearestCells,
});

const mapDispatchToProps = dispatch => ({
  increase: uuid => dispatch(Actions.increase(uuid)),
  decrease: uuid => dispatch(Actions.decrease(uuid)),
  setNearestCells: cell => dispatch(Actions.setNearestCells(cell)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableCell);

TableCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.number.isRequired,
    uuid: PropTypes.string.isRequired,
  }).isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
  rowSum: PropTypes.number.isRequired,
};
