import React, { useState } from 'react';
import { heroes } from '../../data/heroes';
import HeroCard from '../heroes/HeroCard';
import { BsFillExclamationCircleFill } from 'react-icons/bs';

const SearchScreen = () => {
  const [value, setValue] = useState('');
  const [heroFiltered, setHeroFiltered] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = heroes.filter((hero) => hero.superhero === value);
    setHeroFiltered(filtered);
    setValue('');
  };

  return (
    <div className='container-fluid mt-2'>
      <h2>Search screen</h2>
      <hr />
      <div className='row'>
        <div className='col-lg-7 col-md-7'>
          <form
            className='row row-cols-lg-auto g-3 align-items-center'
            onSubmit={handleSubmit}
          >
            <div className='col-8'>
              <input
                type='text'
                className='form-control'
                placeholder='Search your hero'
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className='col-4'>
              <button type='submit' className='btn btn-primary'>
                Search
              </button>
            </div>
          </form>
        </div>

        <div className='col-lg-5 col-md-5'>
          {heroFiltered ? (
            heroFiltered.map((hero) => <HeroCard key={hero.id} {...hero} />)
          ) : (
            // <p>{heroFiltered.superhero}</p>
            <div className='alert alert-warning' role='alert'>
              <BsFillExclamationCircleFill />
              <span> Busca algún héroe </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
