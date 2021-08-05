import React from 'react';
import PropTypes from 'prop-types';

import './Battle.scss';
import Pokemon from './containers/Pokemon';

function Battle({ opponentPkmn, playerPkmn }) {
  return (
    <div className="battle">
      <Pokemon type="opponent" pkmn={opponentPkmn} />
      <Pokemon type="player" pkmn={playerPkmn} />
    </div>
  );
}

Battle.propTypes = {
  opponentPkmn: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    maxHP: PropTypes.number.isRequired,
    currentHP: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
  }).isRequired,
  playerPkmn: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    maxHP: PropTypes.number.isRequired,
    currentHP: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
  }).isRequired,
};

export default Battle;
