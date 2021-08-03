// Create a Redux container for the Pokemon component.
import { connect } from 'react-redux';
import fourMenuKeyHandler from '../selectors/fourMenuKeyHandler';
import { selectMenuBaseItem, changeMenuBase } from '../actions';
import confirmHandler from '../selectors/confirmHandler';

import MenuBase from '../Menus/MenuBase';

const mapDispatchToProps = (dispatch) => ({
  selectMenuBase: (key, item) => {
    dispatch(selectMenuBaseItem(fourMenuKeyHandler(key, item)));
  },
  changeMenuBase: (key, menuItem) => {
    confirmHandler(key, dispatch, changeMenuBase, menuItem);
  },
});

export default connect(null, mapDispatchToProps)(MenuBase);
