import React from 'react';
import '../Styles/Spinner.css';

const Spinner = () => (
  <>
    <div className="scaling-squares-spinner">
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
    </div>
    <p className="spinner-header">Table construction is in progress...</p>
  </>
);

export default Spinner;
