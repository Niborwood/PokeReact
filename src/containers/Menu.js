// Create a Redux container for the Pokemon component.
import { connect } from 'react-redux';

import Menu from '../Menu';

const mapStateToProps = ({
  isBattling, menuContent, selectedMenuBaseItem, playerPkmn: { moves },
}) => ({
  isBattling,
  menuContent,
  selectedMenuBaseItem,
  pkmnMoves: moves,
});

export default connect(mapStateToProps, {})(Menu);
