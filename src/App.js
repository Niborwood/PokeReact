import React from 'react';

import Battle from './containers/Battle';
import Menu from './containers/Menu';

import './App.scss';

function App() {
  return (
    <div className="app">
      <div className="app__pokemonBattle">
        <Battle />
        <div className="menu">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default App;
