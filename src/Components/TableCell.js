import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../Strore/store';

const TableCell = ({ cell, increase, decrease, rowSum }) => {
  const percentageValue = Math.round(cell.value / rowSum * 10000) / 100;

  return (
    <td
      className="table__cell"
      onClick={() => increase(cell.uuid)}
      onContextMenu={(event) => {
        event.preventDefault();
        decrease(cell.uuid);
      }}
    >
      <div className="table__cell-container">
        <span className="table__cell-absolut">
          {cell.value}
        </span>

        <div className="table__cell-percentage" >
          {`${percentageValue}%`}
          <div className="chart" style={{
              height: `${percentageValue}%`
          }}></div>

        </div>

      </div>
    </td>
  );
};

const mapDispatchToProps = dispatch => ({
  increase: uuid => dispatch(Actions.increase(uuid)),
  decrease: uuid => dispatch(Actions.decrease(uuid)),
});

export default connect(null, mapDispatchToProps)(TableCell);
