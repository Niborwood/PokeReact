import {
  BATTLE_MOVE, battleStart, battleAnimationStart, battleAnimationEnd,
} from '../actions';

const battle = (store) => (next) => (action) => {
  switch (action.type) {
    case BATTLE_MOVE: {
      // Let's start the battle ! isBattling is set to true.
      store.dispatch(battleStart());

      // Dispatch battle animation after a 1 second delay (shake/flicker)
      // Operations to calculate damage and apply it to the enemy. Must recieve final HP info.
      // Start the battle animation (w/ reducer)

      setTimeout(() => {
        let leftHP;
        const currentDamage = store.getState().currentMove.damage;
        const enemyHP = store.getState().opponentPkmn.currentHP;
        console.log(currentDamage, enemyHP);
        leftHP = enemyHP - currentDamage;
        if (leftHP < 0) {
          leftHP = 0;
        }
        console.log(leftHP);
        store.dispatch(battleAnimationStart(leftHP));
      }, 1000);

      // Dispatch battle end after a 2 second delay
      // Setting battleAnimation to false to enable key control for the player
      setTimeout(() => {
        store.dispatch(battleAnimationEnd());
      }, 2000);

      // Let the middleware continue to store currentMove data to the state
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default battle;
