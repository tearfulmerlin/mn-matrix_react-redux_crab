import React from 'react';
import { connect } from 'react-redux';
import './Styles/App.scss';

import Spinner from './Components/Spinner';
import MatrixTable from './Components/MatrixTable';
import StartingForm from './Components/StartingForm';

class App extends React.Component {
  render = () => {
    const { nums , loading, loaded } = this.props;

    return (
      <div className="App">
        <h1>MN Matrix</h1>
        {!loading && nums.length === 0 && <StartingForm />}
        {loading && <Spinner />}
        {loaded && nums.length > 0 && <MatrixTable />}
      </div>
    );
  };
}

const mapStateToPrors = state => ({
  nums: state.nums,
  loading: state.loading,
  loaded: state.loaded,
});

export default connect(mapStateToPrors, null)(App);

