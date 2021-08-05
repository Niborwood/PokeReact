import React from 'react';
import './Pokemon.scss';
import PropTypes from 'prop-types';

function Pokemon({ pkmn, type, isBattling }) {
  const percentLifebar = (pkmn.currentHP / pkmn.maxHP) * 100;
  let lifebarColor;

  if (percentLifebar < 25) {
    lifebarColor = 'red';
  } else if (percentLifebar < 50) {
    lifebarColor = 'orange';
  } else {
    lifebarColor = '#59AB5A';
  }

  return (
    <div className={type === 'opponent' ? 'pokemon' : 'pokemon pokemon__player'}>
      <div className="pokemon__infos">
        <div className="pokemon__name">{pkmn.name}</div>
        <div className="pokemon__level">
          :N
          <span className="pokemon__levelNumber">{pkmn.level}</span>
        </div>
        <div className="pokemon__life">
          <div className="pokemon__lifeText">HP:</div>
          <div className="pokemon__lifebar">
            <div style={{ width: `${percentLifebar}%`, backgroundColor: lifebarColor }} className="pokemon__lifebar__fill" />
          </div>
          <div className="pokemon__hp">
            {pkmn.currentHP}
            /
            {' '}
            {pkmn.maxHP}
          </div>
        </div>
      </div>
      <div className="pokemon__spriteHolder">
        <img className={`pokemon__sprite ${isBattling && type === 'opponent' ? 'pokemon__spriteHit' : ''}`} src={`${process.env.PUBLIC_URL}/img/${type === 'opponent' ? 'front' : 'back'}/${pkmn.id}.png`} alt={pkmn.name} />
      </div>
    </div>
  );
}

Pokemon.propTypes = {
  pkmn: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    maxHP: PropTypes.number.isRequired,
    currentHP: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
  isBattling: PropTypes.bool,
};

Pokemon.defaultProps = {
  isBattling: false,
};

export default Pokemon;
