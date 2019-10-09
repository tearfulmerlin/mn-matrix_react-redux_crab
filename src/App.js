import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Styles/App.scss';
import Spinner from './Components/Spinner';
import MatrixTable from './Components/MatrixTable';
import StartingForm from './Components/StartingForm';

const App = ({ nums , loading, loaded }) => (
  <div className="App">
    <h1>MN Matrix</h1>
    {!loading && nums.length === 0 && <StartingForm />}
    {loading && <Spinner />}
    {loaded && nums.length > 0 && <MatrixTable />}
  </div>
);

const mapStateToPrors = state => ({
  nums: state.nums,
  loading: state.loading,
  loaded: state.loaded,
});

export default connect(mapStateToPrors, null)(App);

App.propTypes = {
  nums: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.object)
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
};
