import React from 'react';
import '../../styles/Spinner.css';

export const Spinner = () => (
  <>
    <div className="scaling-squares-spinner">
      <div className="square">{''}</div>
      <div className="square">{''}</div>
      <div className="square">{''}</div>
      <div className="square">{''}</div>
    </div>
    <p className="spinner-header">Table construction is in progress...</p>
  </>
);
