// Create a Redux container for the App component.
import { connect } from 'react-redux';

import Pokemon from '../Pokemon';

const mapStateToProps = ({ isBattling, playerTurn, opponentTurn }) => ({
  isBattling,
  playerTurn,
  opponentTurn,
});

export default connect(mapStateToProps, {})(Pokemon);
