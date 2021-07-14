import React from 'react';
import HeroesList from '../heroes/HeroesList';

const DcScreen = () => {
  return (
    <div className='container-fluid mt-2'>
      <h2>DC Heroes</h2>
      <hr />
      <div className='row justify-content-around py-3'>
        <HeroesList publisher='DC Comics' />
      </div>
    </div>
  );
};

export default DcScreen;
