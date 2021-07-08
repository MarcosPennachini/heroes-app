import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import getHeroesById from '../../selectors/getHeroesById';

const HeroScreen = () => {
  const { heroId } = useParams();
  const hero = getHeroesById(heroId);
  if (!hero) {
    return <Redirect to='/' />;
  }
  return (
    <div>
      <h2>HeroScreen</h2>
    </div>
  );
};

export default HeroScreen;
