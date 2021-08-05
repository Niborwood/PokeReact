import {
  BATTLE_INIT, battleStart, battleAnimationStart, battleAnimationEnd,
} from '../actions';

const battle = (store) => (next) => (action) => {
  switch (action.type) {
    case BATTLE_INIT:
      // Let's start the battle ! isBattling is set to true.
      store.dispatch(battleStart());

      // Dispatch battle end after a 1 second delay
      setTimeout(() => {
        store.dispatch(battleAnimationStart(22));
      }, 1000);

      setTimeout(() => {
        store.dispatch(battleAnimationEnd());
      }, 2000);
      break;

    default:
      next(action);
  }
};

export default battle;
