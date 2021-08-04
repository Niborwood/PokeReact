// Create a Redux container for the Pokemon component.
import { connect } from 'react-redux';

import Menu from '../Menu';

const mapStateToProps = ({ menuContent, selectedMenuBaseItem, playerPkmn: { moves } }) => ({
  menuContent,
  selectedMenuBaseItem,
  pkmnMoves: moves,
});

export default connect(mapStateToProps, {})(Menu);
