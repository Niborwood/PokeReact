import {
  BATTLE_START,
  battleInit,
  battleMove,
  // playerMove, opponentMove,
  damageStart, damageEnd, BATTLE_MOVE,
} from '../actions';

import damageCalculator from '../selectors/damageCalculator';

const battle = (store) => (next) => (action) => {
  switch (action.type) {
    case BATTLE_START: {
      // Let's INIT the battle ! isBattling is set to true.
      store.dispatch(battleInit());

      // Checking which pokemon has the fastest speed.
      const { spd: playerSpeed } = store.getState().playerPkmn.stats;
      const { spd: opponentSpeed } = store.getState().opponentPkmn.stats;

      const faster = playerSpeed >= opponentSpeed ? 'player' : 'opponent';
      if (faster === 'player') {
        store.dispatch(battleMove({
          playerTurn: true,
          lastTurn: false,
        }));
      } else {
        store.dispatch(battleMove({
          playerTurn: false,
          lastTurn: false,
        }));
      }

      // Let the middleware continue to store
      // currentPlayerMove and currentOpponentMove data to the state
      next(action);
      break;
    }

    case BATTLE_MOVE: {
      // Dispatch battle animation after a 1 second delay (shake/flicker)
      // Operations to calculate damage and apply it to the enemy. Must recieve final HP info
      // (operation in the setTimeout to let BATTLE_START action to be processed)
      // Start the battle animation (w/ reducer)
      setTimeout(() => {
        const { playerTurn } = store.getState();

        // If it's the player's turn, we initiate damage animation
        // through damageStart payload parameters
        if (playerTurn) {
          const moveDamage = store.getState().currentPlayerMove.damage;
          const enemyHP = store.getState().opponentPkmn.currentHP;
          store.dispatch(damageStart({
            target: 'opponentPkmn',
            targetHP: damageCalculator(moveDamage, enemyHP),
          }));
        } else { // Same thing with opponent payload
          const moveDamage = store.getState().currentOpponentMove.damage;
          const enemyHP = store.getState().playerPkmn.currentHP;
          store.dispatch(damageStart({
            target: 'playerPkmn',
            targetHP: damageCalculator(moveDamage, enemyHP),
          }));
        }
      }, 1000);

      // Dispatch battle end after a 2 second delay
      // Setting battleAnimation to false to enable key control for the player
      setTimeout(() => {
        store.dispatch(damageEnd());
      }, 2000);
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default battle;
