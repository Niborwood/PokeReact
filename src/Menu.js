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
  menuContent, selectedMenuBaseItem, pkmnMoves, isBattling,
}) {
  // If the user is battling, we want to show the attack dialog.
  // We're also passing "1" as previousMenuContent to fallback to the
  // "Attack" menu.
  if (isBattling) {
    return <TwoLinesMenu content="DRACAUFEU lance TRANCHE !" isBattling previousMenuContent={1} />;
  }

  // Else, we show the current menu (defaulting to 0, main menu)
  switch (menuContent) {
    case 1:
      return <VerticalItemsMenu selectedMenuItem={selectedMenuBaseItem} items={pkmnMoves} />;
    case 2:
      return <TwoLinesMenu content="Ce n'est pas tres effiace..." />;
    case 3:
      return <TwoLinesMenu content="Ce n'est pas tres effiace..." />;
    case 4:
      return <TwoLinesMenu content="Impossible de fuir un combat de dresseur !" />;

    default: {
      return (
        <FourItemsMenu selectedMenuItem={selectedMenuBaseItem} fullWidth={false} />
      );
    }
  }
}

Menu.propTypes = {
  // FROM CONTAINER
  menuContent: PropTypes.number.isRequired,
  selectedMenuBaseItem: PropTypes.number.isRequired,
  pkmnMoves: PropTypes.arrayOf(PropTypes.number).isRequired,
  isBattling: PropTypes.bool.isRequired,
};

export default Menu;