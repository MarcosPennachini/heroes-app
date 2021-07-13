import React, { useMemo } from 'react';
import getHeroesByPublisher from '../../selectors/getHeroesByPublisher';
import HeroCard from './HeroCard';

const HeroesList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </>
  );
};

export default HeroesList;
