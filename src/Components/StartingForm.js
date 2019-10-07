import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import * as Actions from '../Strore/store';

const StartingForm = ({ generateTable }) => {
  const formInitialState = { rowCount: 5, columnCount: 3, nearestCount: 1 };
  const [formState, setFormState] = useState(formInitialState);

  const setRowCount = ({ target }) => {
    setFormState(prevState => ({
      ...prevState,
      rowCount: target.value,
    }))
  };

  const setColumnCount = ({ target }) => {
    setFormState(prevState => ({
      ...prevState,
      columnCount: target.value,
    }))
  };

  const setNearestCount = ({ target }) => {
    setFormState(prevState => ({
      ...prevState,
      nearestCount: target.value,
    }))
  };

  return (
    <form onSubmit={() => generateTable(formState)}>
      <p>Set number of table rows and columns</p>
      <label>
        <input
          type="number"
          min="1"
          max="10"
          placeholder="Rows"
          value={formState.rowCount}
          onChange={setRowCount}
        />
      </label>

      <label>
        <input
          type="number"
          min="1"
          max="5"
          placeholder="Columns"
          value={formState.columnCount}
          onChange={setColumnCount}
        />
      </label>

      <label>
        <input
          type="number"
          min="1"
          max="5"
          placeholder="Highloghted cells"
          value={formState.nearestCount}
          onChange={setNearestCount}
        />
      </label>

      <button type="submit">Generate table</button>
    </form>
  )
}

const mapDispatchToProps = dispatch => ({
  generateTable: tableVars => dispatch(Actions.setNums(tableVars)),
});

export default connect(null, mapDispatchToProps)(StartingForm);
