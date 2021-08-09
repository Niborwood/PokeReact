import React from 'react';
import './Pokemon.scss';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

function Pokemon({
  pkmn, type, playerTurn, opponentTurn,
}) {
  // Color and widfth of the lifebar depending on the HP of each pokemon
  const percentLifebar = (pkmn.currentHP / pkmn.maxHP) * 100;
  let lifebarColor;
  if (percentLifebar < 25) {
    lifebarColor = 'red';
  } else if (percentLifebar < 50) {
    lifebarColor = 'orange';
  } else {
    lifebarColor = '#59AB5A';
  }

  // Class declaration for hit damage animation
  let hitDamageClass = '';
  if ((playerTurn && type === 'opponent') || (opponentTurn && type === 'player')) {
    hitDamageClass = 'pokemon__spriteHit';
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
            <CountUp start={pkmn.prevHP} end={pkmn.currentHP} duration={1}><span className="currentHP" /></CountUp>
            /
            {pkmn.currentHP <= 100 && ' '}
            {pkmn.maxHP}
          </div>
        </div>
      </div>
      <div className="pokemon__spriteHolder">
        <img className={`pokemon__sprite ${hitDamageClass}`} src={`${process.env.PUBLIC_URL}/img/${type === 'opponent' ? 'front' : 'back'}/${pkmn.id}.png`} alt={pkmn.name} />
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
    prevHP: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
  playerTurn: PropTypes.bool.isRequired,
  opponentTurn: PropTypes.bool.isRequired,
};

export default Pokemon;
