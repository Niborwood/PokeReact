// Create a Redux container for the Pokemon component.
import { connect } from 'react-redux';
import { changeMenuBase, battleEnd } from '../actions';

import TwoLinesMenu from '../Menus/TwoLinesMenu';
import actionHandler from '../selectors/actionHandler';

const mapDispatchToProps = (dispatch) => ({
  changeMenuContent: (key, targetedMenuItem) => {
    dispatch(battleEnd());
    actionHandler('any', key, dispatch, changeMenuBase, { menuContent: targetedMenuItem });
  },
});

export default connect(null, mapDispatchToProps)(TwoLinesMenu);
