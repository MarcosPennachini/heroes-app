import React from 'react';
import HeroesList from '../heroes/HeroesList';

const DcScreen = () => {
  return (
    <div className='container-fluid mt-2'>
      <h2>DC Heroes</h2>
      <hr />
      <HeroesList publisher='DC Comics' />
    </div>
  );
};

export default DcScreen;
