import React, { useMemo, useState } from 'react';
import HeroCard from '../heroes/HeroCard';
import { BsFillExclamationCircleFill } from 'react-icons/bs';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import getHeroesByName from '../../selectors/getHeroesByName';

const SearchScreen = ({ history }) => {
  const [value, setValue] = useState('');
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  console.log(q);

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${value}`);
    //setValue('');
  };

  return (
    <div className='container-fluid mt-2'>
      <h2>Search screen</h2>
      <hr />
      <div className='row container-fluid py-3'>
        <div className='col-lg-6 col-md-6'>
          <form
            className='row row-cols-lg-auto g-3 align-items-center'
            onSubmit={handleSubmit}
          >
            <div className='col-8'>
              <input
                type='text'
                className='form-control'
                placeholder='Search your hero'
                autoComplete='off'
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

        <div className='col-lg-6 col-md-6'>
          {q === '' && (
            <div className='alert alert-warning' role='alert'>
              <BsFillExclamationCircleFill />
              <span> Busca algún héroe </span>
            </div>
          )}

          {q !== '' && heroesFiltered.length === 0 && (
            <div className='alert alert-warning' role='alert'>
              <BsFillExclamationCircleFill />
              <span> Busca un nombre válido </span>
            </div>
          )}

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}

          {/* {q != '' && heroesFiltered.length === 0 ? (
            <div className='alert alert-warning' role='alert'>
              <BsFillExclamationCircleFill />
              <span> Busca un nombre válido </span>
            </div>
          ) : (
            heroesFiltered.map((hero) => <HeroCard key={hero.id} {...hero} />)
          )} */}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
