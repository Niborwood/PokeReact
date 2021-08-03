// Create a Redux container for the Pokemon component.
import { connect } from 'react-redux';
import { exitToMenuBase } from '../actions';

import TwoLinesMenu from '../Menus/TwoLinesMenu';
import confirmHandler from '../selectors/confirmHandler';

const mapDispatchToProps = (dispatch) => ({
  exitToMenuBase: (key) => {
    confirmHandler(key, dispatch, exitToMenuBase);
  },
});

export default connect(null, mapDispatchToProps)(TwoLinesMenu);
