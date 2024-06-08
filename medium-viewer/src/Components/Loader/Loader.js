import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <TailSpin
        height="100"
        width="100"
        color="#3498db"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
