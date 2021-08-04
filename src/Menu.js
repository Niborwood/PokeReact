/* eslint-disable no-spaced-func */
/* eslint-disable func-call-spacing */
/* eslint-disable no-unexpected-multiline */
import React from 'react';
import './Menu.scss';
import PropTypes from 'prop-types';

import FourItemsMenu from './containers/FourItemsMenu';
import TwoLinesMenu from './containers/TwoLinesMenu';
import VerticalItemsMenu from './containers/VerticalItemsMenu';

function Menu({ menuContent, selectedMenuBaseItem, pkmnMoves }) {
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
};

export default Menu;
