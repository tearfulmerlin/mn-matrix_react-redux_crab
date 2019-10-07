import React from 'react';
import store from './Strore/store';

import Spinner from './Components/Spinner';
import MatrixTable from './Components/MatrixTable';

import StartingForm from './Components/StartingForm'

class App extends React.Component {
  render = () => {
    const {nums} = this.props;
    return (
      <div className="App">
        ReactApp
        <StartingForm />
        <Spinner />
        {nums.length && <MatrixTable />}
      </div>
    );
  };
};

export default App;
