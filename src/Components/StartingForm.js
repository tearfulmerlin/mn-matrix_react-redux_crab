import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../Strore/store';

const StartingForm = ({ generateTable }) => {
  const formInitialState = { rowCount: 5, columnCount: 3, nearestCount: 1 };
  const [formState, setFormState] = useState(formInitialState);

  const setRowCount = ({ target }) => {
    setFormState(prevState => ({
      ...prevState,
      rowCount: target.value,
    }));
  };

  const setColumnCount = ({ target }) => {
    setFormState(prevState => ({
      ...prevState,
      columnCount: target.value,
    }));
  };

  const setNearestCount = ({ target }) => {
    setFormState(prevState => ({
      ...prevState,
      nearestCount: target.value,
    }));
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        formState.rowCount &&
        formState.columnCount &&
        formState.nearestCount &&
        generateTable(formState);
      }}
      className="starting-form"
    >
      <h2>Set number of table <br /> rows and columns</h2>
      <label className="starting-form__label">
        Rows
        <input
          type="number"
          min="1"
          max="10"
          placeholder="Rows"
          value={formState.rowCount}
          onChange={setRowCount}
        />
      </label>

      <label className="starting-form__label">
        Columns
        <input
          type="number"
          min="1"
          max="5"
          placeholder="Columns"
          value={formState.columnCount}
          onChange={setColumnCount}
        />
      </label>

      <label className="starting-form__label">
        Highlighted cells
        <input
          type="number"
          min="1"
          max="5"
          placeholder="Highlighted cells"
          value={formState.nearestCount}
          onChange={setNearestCount}
        />
      </label>

      <button type="submit">Generate table</button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  generateTable: tableVars => dispatch(Actions.generateTable(tableVars)),
});

export default connect(null, mapDispatchToProps)(StartingForm);
