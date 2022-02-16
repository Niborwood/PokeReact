import React from "react";
import PropTypes from "prop-types";

import Battle from "./containers/Battle";
import Menu from "./containers/Menu";

import "./App.scss";

function App({ isBattling }) {
  return (
    <div className="app">
      <div
        className={
          isBattling ? "app__pokemonBattle app__shake" : "app__pokemonBattle"
        }
      >
        <Battle />
        <div className="menu">
          <Menu />
        </div>
      </div>
      <div className="app__warning">
        <p>
          Cette (toute) petite application s&apos;arrête simplement à choisir
          une attaque, lancer l&apos;animation et que le Sablaireau d&apos;en
          face riposte.
        </p>
        <p>
          C&apos;est tout, mais pour apprendre Redux, c&apos;est déjà pas mal !
        </p>
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
