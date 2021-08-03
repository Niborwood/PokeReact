import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function MenuBase({ selectedMenuBaseItem, selectMenuBase, changeMenuBase }) {
  useEffect(() => {
    // SELECT MENU BASE
    const selectMenuBaseEvent = ({ key }) => {
      selectMenuBase(key, selectedMenuBaseItem);
    };
    document.addEventListener('keyup', selectMenuBaseEvent);

    // CHANGE MENU BASE
    const changeMenuBaseEvent = ({ key }) => {
      if (key === 'Enter') {
        changeMenuBase(selectedMenuBaseItem);
      }
    };
    document.addEventListener('keyup', changeMenuBaseEvent);

    // UNMOUNT EVENTS
    return () => {
      document.removeEventListener('keyup', selectMenuBaseEvent);
      document.removeEventListener('keyup', changeMenuBaseEvent);
    };
  }, [selectedMenuBaseItem]);
  return (
    <div className="menu__chooseAction">
      <div className="menu__groupActions">
        <div className={`menu__chooseItem ${selectedMenuBaseItem === 1 && 'menu__itemSelected'}`}>FIGHT</div>
        <div className={`menu__chooseItem ${selectedMenuBaseItem === 3 && 'menu__itemSelected'}`}>ITEM</div>
      </div>
      <div className="menu__groupActions">
        <div className={`menu__chooseItem ${selectedMenuBaseItem === 2 && 'menu__itemSelected'}`}>PKMN</div>
        <div className={`menu__chooseItem ${selectedMenuBaseItem === 4 && 'menu__itemSelected'}`}>RUN</div>
      </div>
    </div>
  );
}

MenuBase.propTypes = {
  selectedMenuBaseItem: PropTypes.number.isRequired,
  selectMenuBase: PropTypes.func.isRequired,
  changeMenuBase: PropTypes.func.isRequired,
};
export default MenuBase;
