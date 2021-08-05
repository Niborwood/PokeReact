// Create a Redux container for the Pokemon component.
import { connect } from 'react-redux';

import Menu from '../Menu';

const mapStateToProps = ({
  isBattling, menuContent, selectedMenuItem, playerPkmn: { moves },
  currentMove: { name }, playerPkmn: { name: pkmnName },
}) => ({
  isBattling,
  menuContent,
  selectedMenuItem,
  pkmnMoves: moves,
  currentMove: name,
  pkmnName,
});

export default connect(mapStateToProps, {})(Menu);
