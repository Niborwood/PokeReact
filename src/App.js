import React from 'react';
import PropTypes from 'prop-types';

import Battle from './containers/Battle';
import Menu from './containers/Menu';

import './App.scss';

function App({ isBattling }) {
  return (
    <div className="app">
      <div className={isBattling ? 'app__pokemonBattle app__shake' : 'app__pokemonBattle'}>
        <Battle />
        <div className="menu">
          <Menu />
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  isBattling: PropTypes.bool,
};

App.defaultProps = {
  isBattling: false,
};

export default App;
