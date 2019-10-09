import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Actions from '../Strore/store';

const StartingForm = ({ generateTable, loading, loaded }) => {
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

  const submitHandler = (event) => {
    event.preventDefault();
    if (formState.rowCount && formState.columnCount && formState.nearestCount) {
      loading();
      generateTable(formState);
      setTimeout(loaded, 1000);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
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
  loading: () => dispatch(Actions.loading()),
  loaded: () => dispatch(Actions.loaded()),
});

export default connect(null, mapDispatchToProps)(StartingForm);

StartingForm.propTypes = {
  generateTable: PropTypes.func.isRequired,
  loading: PropTypes.func.isRequired,
  loaded: PropTypes.func.isRequired,
};
