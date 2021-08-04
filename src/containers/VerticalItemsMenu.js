// Create a Redux container for the Pokemon component.
import { connect } from 'react-redux';
import { selectMenuBaseItem, changeMenuBase } from '../actions';
import actionHandler from '../selectors/actionHandler';
import verticalMenuKeyHandler from '../selectors/verticalMenuKeyHandler';

import VerticalItemsMenu from '../Menus/VerticalItemsMenu';

const mapStateToProps = ({ moves }) => ({
  moves,
});

const mapDispatchToProps = (dispatch) => ({
  selectMenuItem: (key, item, nbItems) => {
    dispatch(selectMenuBaseItem(verticalMenuKeyHandler(key, item, nbItems)));
  },
  cancelAction: (key, targetedMenuContent) => {
    actionHandler('cancel', key, dispatch, changeMenuBase, { menuContent: targetedMenuContent });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(VerticalItemsMenu);
