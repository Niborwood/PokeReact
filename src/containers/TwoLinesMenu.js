// Create a Redux container for the Pokemon component.
import { connect } from 'react-redux';
import { changeMenuBase } from '../actions';

import TwoLinesMenu from '../Menus/TwoLinesMenu';
import actionHandler from '../selectors/actionHandler';

const mapDispatchToProps = (dispatch) => ({
  changeMenuContent: (key, targetedMenuItem) => {
    actionHandler('any', key, dispatch, changeMenuBase, { menuContent: targetedMenuItem });
  },
});

export default connect(null, mapDispatchToProps)(TwoLinesMenu);
