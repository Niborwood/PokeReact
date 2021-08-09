// Create a Redux container for the Pokemon component.
import { connect } from 'react-redux';
import { selectMenuBaseItem, changeMenuBase, battleStart } from '../actions';
import actionHandler from '../selectors/actionHandler';
import verticalMenuKeyHandler from '../selectors/verticalMenuKeyHandler';

import VerticalItemsMenu from '../Menus/VerticalItemsMenu';

const mapStateToProps = ({ moves, opponentPkmn: { moves: opponentMoves } }) => ({
  moves,
  opponentMoves,
});

const mapDispatchToProps = (dispatch) => ({
  selectMenuItem: (key, item, nbItems) => {
    dispatch(selectMenuBaseItem(verticalMenuKeyHandler(key, item, nbItems)));
  },
  cancelAction: (key, menuContent) => {
    actionHandler('cancel', key, dispatch, changeMenuBase, { menuContent });
  },
  battleMove: (key, currentPlayerMove, currentOpponentMove) => {
    actionHandler('confirm', key, dispatch, battleStart, { currentPlayerMove, currentOpponentMove });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(VerticalItemsMenu);
