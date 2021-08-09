/* eslint-disable no-spaced-func */
/* eslint-disable func-call-spacing */
/* eslint-disable no-unexpected-multiline */
import React from 'react';
import './Menu.scss';
import PropTypes from 'prop-types';

import FourItemsMenu from './containers/FourItemsMenu';
import TwoLinesMenu from './containers/TwoLinesMenu';
import VerticalItemsMenu from './containers/VerticalItemsMenu';

function Menu({
  menuContent, selectedMenuItem, playerTurn, isBattling,
  pkmnName, currentPlayerMove, pkmnMoves,
  opponentPkmnName, opponentPlayerMove,
}) {
  // If the user is battling, we want to show the attack dialog.
  // We're also passing "1" as previousMenuContent to fallback to the
  // "Attack" menu. On each dialog, we check if it's the player's turn
  // to determine whether to show the player's move or the opponent's.
  if (isBattling) {
    return <TwoLinesMenu content={`${playerTurn ? pkmnName : opponentPkmnName} lance ${playerTurn ? currentPlayerMove : opponentPlayerMove} !`} isBattling previousMenuContent={1} />;
  }

  // Else, we show the current menu (defaulting to 0, main menu)
  switch (menuContent) {
    case 1:
      return <VerticalItemsMenu selectedMenuItem={selectedMenuItem} items={pkmnMoves} />;
    case 2:
      return <TwoLinesMenu content="Ce n'est pas tres effiace..." />;
    case 3:
      return <TwoLinesMenu content="Ce n'est pas tres effiace..." />;
    case 4:
      return <TwoLinesMenu content="Impossible de fuir un combat de dresseur !" />;

    default: {
      return (
        <FourItemsMenu selectedMenuItem={selectedMenuItem} fullWidth={false} />
      );
    }
  }
}

Menu.propTypes = {
  // FROM CONTAINER
  menuContent: PropTypes.number.isRequired,
  selectedMenuItem: PropTypes.number.isRequired,
  pkmnMoves: PropTypes.arrayOf(PropTypes.number).isRequired,
  isBattling: PropTypes.bool.isRequired,
  playerTurn: PropTypes.bool.isRequired,
  pkmnName: PropTypes.string.isRequired,
  currentPlayerMove: PropTypes.string,
  opponentPkmnName: PropTypes.string.isRequired,
  currentOpponentMove: PropTypes.string,
};

Menu.defaultProps = {
  currentPlayerMove: '',
  currentOpponentMove: '',
};

export default Menu;
