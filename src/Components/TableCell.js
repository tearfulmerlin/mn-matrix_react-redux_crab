import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../Strore/store';

const TableCell = ({ cell, increase, decrease }) => (
  <td
    onClick={() => increase(cell.uuid)}
    onContextMenu={(event) => {
      event.preventDefault();
      decrease(cell.uuid);
    }}
  >
    {cell.value}
  </td>
);


const mapDispatchToProps = dispatch => ({
  increase: uuid => dispatch(Actions.increase(uuid)),
  decrease: uuid => dispatch(Actions.decrease(uuid)),
});

export default connect(null, mapDispatchToProps)(TableCell);
