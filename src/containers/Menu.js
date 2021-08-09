// Create a Redux container for the Pokemon component.
import { connect } from 'react-redux';

import Menu from '../Menu';

const mapStateToProps = ({
  isBattling, menuContent, selectedMenuItem, playerTurn,
  playerPkmn: { moves },
  currentPlayerMove: { name: currentPlayerMove }, playerPkmn: { name: pkmnName },
  currentOpponentMove: { name: opponentPlayerMove }, opponentPkmn: { name: opponentPkmnName },

}) => ({
  isBattling,
  menuContent,
  selectedMenuItem,
  playerTurn,
  pkmnMoves: moves,
  currentPlayerMove,
  pkmnName,
  opponentPlayerMove,
  opponentPkmnName,
});

export default connect(mapStateToProps, {})(Menu);
