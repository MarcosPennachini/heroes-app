import React from 'react';
import { Link } from 'react-router-dom';

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div
      className='card mt-3 animate__animated animate__fadeIn'
      style={{ maxWidth: '200px', padding: '0px' }}
    >
      <img
        src={`./assets/heroes/${id}.jpg`}
        className='card-img-top'
        alt='hero'
      />
      <div className='card-body'>
        <h5 className='card-title'>{superhero}</h5>

        {/* <p className='card-text'>{alter_ego}</p> */}
        <Link
          href='#'
          to={`./hero/${id}`}
          // className='btn btn-outline-primary btn-sm'
        >
          See more...
        </Link>
      </div>
    </div>
  );
};

export default HeroCard;
