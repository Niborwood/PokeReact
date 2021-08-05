import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function FourItemsMenu({
  items, selectedMenuItem, selectMenu, changeMenu,
}) {
  useEffect(() => {
    // CHANGE MENU CONTENT
    const changeMenuEvent = ({ key }) => {
      changeMenu(key, selectedMenuItem);
    };
    document.addEventListener('keyup', changeMenuEvent);

    // SELECT MENU ITEM
    const selectMenuEvent = ({ key }) => {
      selectMenu(key, selectedMenuItem);
    };
    document.addEventListener('keyup', selectMenuEvent);

    // UNMOUNT EVENTS
    return () => {
      document.removeEventListener('keyup', selectMenuEvent);
      document.removeEventListener('keyup', changeMenuEvent);
    };
  }, [selectedMenuItem]);

  return (
    <div className="menu__chooseAction">
      <div className="menu__groupActions">
        <div className={`menu__chooseItem ${selectedMenuItem === 1 && 'menu__itemSelected'}`}>{items[0]}</div>
        <div className={`menu__chooseItem ${selectedMenuItem === 3 && 'menu__itemSelected'}`}>{items[1]}</div>
      </div>
      <div className="menu__groupActions">
        <div className={`menu__chooseItem ${selectedMenuItem === 2 && 'menu__itemSelected'}`}>{items[2]}</div>
        <div className={`menu__chooseItem ${selectedMenuItem === 4 && 'menu__itemSelected'}`}>{items[3]}</div>
      </div>
    </div>
  );
}

FourItemsMenu.propTypes = {
  // FROM PROPS
  items: PropTypes.arrayOf(PropTypes.string),
  // FROM CONTAINER
  selectedMenuItem: PropTypes.number,
  selectMenu: PropTypes.func.isRequired,
  changeMenu: PropTypes.func.isRequired,
};

FourItemsMenu.defaultProps = {
  selectedMenuItem: 0,
  items: ['ATTAQ', 'PKMN', 'OBJET', 'FUITE'],
};

export default FourItemsMenu;
