import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import NextArrow from './NextArrow';

function TwoLinesMenu({ exitToMenuBase, lineOne, lineTwo }) {
  useEffect(() => {
    // EXIT TO MENU BASE
    const exitToMenuBaseEvent = ({ key }) => {
      exitToMenuBase(key);
    };
    document.addEventListener('keyup', exitToMenuBaseEvent);

    // UNMOUNT EVENTS
    return () => {
      document.removeEventListener('keyup', exitToMenuBaseEvent);
    };
  }, []);

  return (
    <div className="menu__twoLinesMenu">
      {lineOne}
      <br />
      {lineTwo}
      <NextArrow />
    </div>
  );
}

TwoLinesMenu.propTypes = {
  exitToMenuBase: PropTypes.func.isRequired,
  lineOne: PropTypes.string.isRequired,
  lineTwo: PropTypes.string,
};

TwoLinesMenu.defaultProps = {
  lineTwo: '',
};

export default TwoLinesMenu;
