import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './verticalItems.scss';

function VerticalItemsMenu({
  items, selectedMenuItem, cancelAction, selectMenuItem,
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

    // Remove event listeners when component unmounts
    return () => {
      document.removeEventListener('keyup', cancelEventHandler);
      document.removeEventListener('keyup', selectEventHandler);
    };
  }, [selectedMenuItem]);

  const itemsList = items.map((item, index) => (
    <div key={item} className={`menu__chooseItem ${selectedMenuItem === index + 1 && 'menu__itemSelected'}`}>{item}</div>
  ));

  return (
    <div className="verticalItems">
      {itemsList}
    </div>
  );
}

VerticalItemsMenu.propTypes = {
  // FROM PROPS
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedMenuItem: PropTypes.number.isRequired,
  // FROM CONTAINER
  cancelAction: PropTypes.func.isRequired,
  selectMenuItem: PropTypes.func.isRequired,
};

export default VerticalItemsMenu;
