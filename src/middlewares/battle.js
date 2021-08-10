import {
  BATTLE_START, PLAYER_MOVE, OPPONENT_MOVE,
  battleInit,
  playerMove, playerDamageStart, playerDamageEnd,
  opponentMove, opponentDamageStart, opponentDamageEnd,
  // lastTurnEnd,
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
      console.log(faster);
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
        store.dispatch(playerDamageStart(damageCalculator(moveDamage, enemyHP)));
      }, 1000);

      // Dispatch battle end after a 2 second delay
      // Setting battleAnimation to false to enable key control for the player
      setTimeout(() => {
        store.dispatch(playerDamageEnd());
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
        const playerHP = store.getState().playerPkmn.currentHP;
        store.dispatch(opponentDamageStart(damageCalculator(moveDamage, playerHP)));
      }, 1000);

      // Dispatch battle end after a 2 second delay
      // Setting battleAnimation to false to enable key control for the player
      setTimeout(() => {
        store.dispatch(opponentDamageEnd());
      }, 2000);
      next(action);
      break;

    default:
      next(action);
  }
};

export default battle;
