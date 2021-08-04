import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import NextArrow from './NextArrow';

function TwoLinesMenu({ changeMenuContent, content, previousMenuContent }) {
  useEffect(() => {
    // Event listener to go back to previous menu via
    // menuContent state.
    const changeMenuContentEvent = ({ key }) => {
      changeMenuContent(key, previousMenuContent);
    };
    document.addEventListener('keyup', changeMenuContentEvent);

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
  changeMenuContent: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  previousMenuContent: PropTypes.number,
};

TwoLinesMenu.defaultProps = {
  previousMenuContent: 0,
};

export default TwoLinesMenu;
