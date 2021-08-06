import {
  BATTLE_MOVE, battleStart, battleAnimationStart, battleAnimationEnd,
} from '../actions';

import damageCalculator from '../selectors/damageCalculator';

const battle = (store) => (next) => (action) => {
  switch (action.type) {
    case BATTLE_MOVE: {
      // Let's start the battle ! isBattling is set to true.
      store.dispatch(battleStart());

      // Checking which pokemon has the fastest speed.
      const { spd: playerSpeed } = store.getState().playerPkmn.stats;
      const { spd: opponentSpeed } = store.getState().opponentPkmn.stats;

      const faster = playerSpeed >= opponentSpeed ? 'player' : 'opponent';

      // Dispatch battle animation after a 1 second delay (shake/flicker)
      // Operations to calculate damage and apply it to the enemy. Must recieve final HP info
      // (operation in the setTimeout to let BATTLE_MOVE action to be processed)
      // Start the battle animation (w/ reducer)
      setTimeout(() => {
        const moveDamage = store.getState().currentPlayerMove.damage;
        const enemyHP = store.getState().opponentPkmn.currentHP;
        store.dispatch(battleAnimationStart(damageCalculator(moveDamage, enemyHP)));
      }, 1000);

      // Dispatch battle end after a 2 second delay
      // Setting battleAnimation to false to enable key control for the player
      setTimeout(() => {
        store.dispatch(battleAnimationEnd(faster));
      }, 2000);

      // Let the middleware continue to store
      // currentPlayerMove and currentOpponentMove data to the state
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default battle;
