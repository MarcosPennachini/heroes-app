import React from 'react';
import HeroesList from '../heroes/HeroesList';

const MarvelScreen = () => {
  return (
    <div className='container-fluid mt-2'>
      <h2>Marvel Heroes</h2>
      <hr />
      <HeroesList publisher='Marvel Comics' />
    </div>
  );
};

export default MarvelScreen;
