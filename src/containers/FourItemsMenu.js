// Create a Redux container for the Pokemon component.
import { connect } from 'react-redux';
import fourMenuKeyHandler from '../selectors/fourMenuKeyHandler';
import { selectMenuBaseItem, changeMenuBase } from '../actions';
import actionHandler from '../selectors/actionHandler';

import FourItemsMenu from '../Menus/FourItemsMenu';

const mapDispatchToProps = (dispatch) => ({
  selectMenu: (key, item) => {
    dispatch(selectMenuBaseItem(fourMenuKeyHandler(key, item)));
  },
  changeMenu: (key, targetedMenuContent) => {
    actionHandler('confirm', key, dispatch, changeMenuBase, { menuContent: targetedMenuContent });
  },
});

export default connect(null, mapDispatchToProps)(FourItemsMenu);
