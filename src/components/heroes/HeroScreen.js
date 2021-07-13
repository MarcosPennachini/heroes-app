import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import getHeroesById from '../../selectors/getHeroesById';
import { BiArrowBack } from 'react-icons/bi';

const HeroScreen = ({ history }) => {
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroesById(heroId), [heroId]);

  if (!hero) {
    return <Redirect to='/' />;
  }
  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  const handleReturn = () => {
    if (history.length >= 2) {
      if (publisher === 'DC Comics') {
        history.push('/dc');
      } else history.push('/marvel');
    } else history.goBack();
  };

  return (
    <div className='container-fluid mt-3'>
      <div className='row mt-3'>
        <div className='col-lg-4'>
          <img
            src={`../assets/heroes/${hero.id}.jpg`}
            alt='superhero'
            className='img-thumbnail'
          />
        </div>
        <div className='col-lg-8'>
          <h3 className='display-2 mb-4'> {superhero} </h3>
          <ul className='list-group'>
            <li className='list-group-item'>
              <b>Alter ego:</b> {alter_ego}
            </li>
            <li className='list-group-item'>
              <b>First appearance:</b> {first_appearance}
            </li>
            <li className='list-group-item'>
              <b>Publisher:</b> {publisher}
            </li>
          </ul>
          <br />
          <h5>Characters</h5>
          <p> {characters} </p>
          <button className='btn btn-outline-primary' onClick={handleReturn}>
            <BiArrowBack /> Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroScreen;
