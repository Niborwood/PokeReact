import {
  BATTLE_START, PLAYER_MOVE, OPPONENT_MOVE,
  battleInit,
  playerMove, opponentMove,
  damageStart, damageEnd,
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
        store.dispatch(playerMove(false));
      } else {
        store.dispatch(opponentMove(false));
      }

      // Let the middleware continue to store
      // currentPlayerMove and currentOpponentMove data to the state
      next(action);
      break;
    }

    case PLAYER_MOVE:
      // Dispatch battle animation after a 1 second delay (shake/flicker)
      // Operations to calculate damage and apply it to the enemy. Must recieve final HP info
      // (operation in the setTimeout to let BATTLE_START action to be processed)
      // Start the battle animation (w/ reducer)
      setTimeout(() => {
        const moveDamage = store.getState().currentPlayerMove.damage;
        const enemyHP = store.getState().opponentPkmn.currentHP;
        const targetHP = damageCalculator(moveDamage, enemyHP);
        store.dispatch(damageStart({
          target: 'opponentPkmn',
          targetHP,
        }));
      }, 1000);

      // Dispatch battle end after a 2 second delay
      // Setting battleAnimation to false to enable key control for the player
      setTimeout(() => {
        store.dispatch(damageEnd());
      }, 2000);
      next(action);
      break;

    case OPPONENT_MOVE:
      // Dispatch battle animation after a 1 second delay (shake/flicker)
      // Operations to calculate damage and apply it to the enemy. Must recieve final HP info
      // (operation in the setTimeout to let BATTLE_START action to be processed)
      // Start the battle animation (w/ reducer)
      setTimeout(() => {
        const moveDamage = store.getState().currentOpponentMove.damage;
        const enemyHP = store.getState().playerPkmn.currentHP;
        const targetHP = damageCalculator(moveDamage, enemyHP);
        store.dispatch(damageStart({
          target: 'playerPkmn',
          targetHP,
        }));
      }, 1000);

      // Dispatch battle end after a 2 second delay
      // Setting battleAnimation to false to enable key control for the player
      setTimeout(() => {
        store.dispatch(damageEnd());
      }, 2000);
      next(action);
      break;

    default:
      next(action);
  }
};

export default battle;
