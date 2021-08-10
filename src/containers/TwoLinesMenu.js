// Create a Redux container for the Pokemon component.
import { connect } from 'react-redux';
import store from '../store';

import {
  changeMenuBase, playerMove, opponentMove, battleEnd,
} from '../actions';

import TwoLinesMenu from '../Menus/TwoLinesMenu';
import actionHandler from '../selectors/actionHandler';

const mapDispatchToProps = (dispatch) => ({
  changeMenuContent: (key, targetedMenuItem) => {
    const {
      playerTurn, opponentTurn, isBattling, lastTurn,
    } = store.getState();
    // We check the last turn first. If it is, we know the battle is over and
    // user must fallback to the attack menu.
    if (lastTurn) {
      // Skip BATTLE_END action if the user isn't battling.
      if (isBattling) {
        dispatch(battleEnd());
      }
      actionHandler('any', key, dispatch, changeMenuBase, { menuContent: targetedMenuItem });
      // If it's the opponent's turn, we need to perform his move as the last move.
    } else if (opponentTurn) {
      dispatch(playerMove(true)); // true means we state that it's the last turn.
      // If it's the player's turn, we need to perform his move as the last move.
    } else if (playerTurn) {
      dispatch(opponentMove(true)); // true means we state that it's the last turn.
      // When the last move is done (set with lastTurnEnd), we can exit the battle.
    }
  },
});

export default connect(null, mapDispatchToProps)(TwoLinesMenu);
