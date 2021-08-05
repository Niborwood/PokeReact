import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './verticalItems.scss';
import AttackInfo from './AttackInfo';

function VerticalItemsMenu({
  items,
  moves,
  selectedMenuItem,
  cancelAction,
  selectMenuItem,
  battleInit,
}) {
  // Render everytime selectedMenuitem changes
  useEffect(() => {
    // Select menu (through a vertical x items menu).
    // We're passing items.length to handle 1 and max
    // up and down returns
    const selectEventHandler = ({ key }) => {
      selectMenuItem(key, selectedMenuItem, items.length);
    };
    document.addEventListener('keyup', selectEventHandler);

    // Cancel action on key up (passing the key,
    // in this case, second parameter is 0 because
    // it fallbacks to the Main Menu). It muse be
    // the last one to be executed, since it changes the
    // selectedMenuItem state.
    const cancelEventHandler = ({ key }) => {
      cancelAction(key, 0);
    };
    document.addEventListener('keyup', cancelEventHandler);

    // Let's battle the opponent pokemon !
    const battleInitHandler = ({ key }) => {
      battleInit(key);
    };
    document.addEventListener('keyup', battleInitHandler);

    // Remove event listeners when component unmounts
    return () => {
      document.removeEventListener('keyup', cancelEventHandler);
      document.removeEventListener('keyup', selectEventHandler);
      document.removeEventListener('keyup', battleInitHandler);
    };
  }, [selectedMenuItem]);

  // Everytime a menu item is selected, we're
  // retrieving static type and maxPP data from moves,
  // and currentPP data from the pokemon state
  // Everything is then passed to the AttackInfo component
  const { type, pp } = moves.find((move) => move.id === items[selectedMenuItem - 1]);

  // Display as many attacks as the pokemon have
  // with info from the move id with moves.find
  const itemsList = items.map((item, index) => {
    const { name: moveName } = moves.find((move) => move.id === item);
    return (
      <div key={item} className={`menu__chooseItem ${selectedMenuItem === index + 1 && 'menu__itemSelected'}`}>{ moveName }</div>
    );
  });

  return (
    <>
      <AttackInfo type={type} maxPP={pp} currentPP={pp} />
      <div className="verticalItems">
        {itemsList}
      </div>
    </>
  );
}

VerticalItemsMenu.propTypes = {
  // FROM PROPS
  items: PropTypes.arrayOf(PropTypes.number).isRequired,
  selectedMenuItem: PropTypes.number.isRequired,
  // FROM CONTAINER
  moves: PropTypes.arrayOf(PropTypes.object).isRequired,
  cancelAction: PropTypes.func.isRequired,
  selectMenuItem: PropTypes.func.isRequired,
  battleInit: PropTypes.func.isRequired,
};

export default VerticalItemsMenu;
