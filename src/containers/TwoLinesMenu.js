// Create a Redux container for the Pokemon component.
import { connect } from 'react-redux';
import { changeMenuBase, playerMoveEnd } from '../actions';

import TwoLinesMenu from '../Menus/TwoLinesMenu';
import actionHandler from '../selectors/actionHandler';

const mapDispatchToProps = (dispatch, { isBattling }) => ({
  changeMenuContent: (key, targetedMenuItem) => {
    if (isBattling) {
      dispatch(playerMoveEnd());
    }
    actionHandler('any', key, dispatch, changeMenuBase, { menuContent: targetedMenuItem });
  },
});

export default connect(null, mapDispatchToProps)(TwoLinesMenu);
