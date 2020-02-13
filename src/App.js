import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './styles/App.scss';
import Spinner from './components/Spinner';
import StartingForm from './components/StartingForm';
import MatrixTable from './components/MatrixTable';

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
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
};
