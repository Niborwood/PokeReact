import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import NextArrow from './NextArrow';

function TwoLinesMenu({
  changeMenuContent, content, previousMenuContent, isBattling,
}) {
  useEffect(() => {
    // Event listener to go back to previous menu via
    // menuContent state. If user is battling, delay the listener by 1 second
    // to give the battle time to finish.
    const isBattlingDelay = isBattling ? 2000 : 0;
    const changeMenuContentEvent = ({ key }) => {
      changeMenuContent(key, previousMenuContent);
    };

    setTimeout(() => {
      document.addEventListener('keyup', changeMenuContentEvent);
    }, isBattlingDelay);

    // UNMOUNT EVENTS
    return () => {
      document.removeEventListener('keyup', changeMenuContentEvent);
    };
  }, []);

  return (
    <div className="menu__twoLinesMenu">
      {content}
      <NextArrow />
    </div>
  );
}

TwoLinesMenu.propTypes = {
  // FROM PROPS
  content: PropTypes.string.isRequired,
  previousMenuContent: PropTypes.number,
  isBattling: PropTypes.bool,
  // FROM CONTAINER
  changeMenuContent: PropTypes.func.isRequired,
};

TwoLinesMenu.defaultProps = {
  previousMenuContent: 0,
  isBattling: false,
};

export default TwoLinesMenu;
