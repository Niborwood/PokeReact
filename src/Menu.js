/* eslint-disable no-spaced-func */
/* eslint-disable func-call-spacing */
/* eslint-disable no-unexpected-multiline */
import React from 'react';
import './Menu.scss';
import PropTypes from 'prop-types';

import MenuBase from './containers/MenuBase';
import TwoLinesMenu from './containers/TwoLinesMenu';

function Menu({ menuContent, selectedMenuBaseItem }) {
  switch (menuContent) {
    case 4:
      return (
        <TwoLinesMenu lineOne="Impossible de fuir" lineTwo="un combat de dresseur !" />
      );

    default:
      return (
        <MenuBase selectedMenuBaseItem={selectedMenuBaseItem} />
      );
  }
}

Menu.propTypes = {
  menuContent: PropTypes.number.isRequired,
  selectedMenuBaseItem: PropTypes.number.isRequired,
};

export default Menu;
