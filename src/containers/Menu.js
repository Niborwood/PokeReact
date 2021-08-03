// Create a Redux container for the Pokemon component.
import { connect } from 'react-redux';

import Menu from '../Menu';

const mapStateToProps = ({ menuContent, selectedMenuBaseItem }) => ({
  menuContent,
  selectedMenuBaseItem,
});

export default connect(mapStateToProps, {})(Menu);
