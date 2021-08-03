// Create a Redux container for the Pokemon component.
import { connect } from 'react-redux';

import Battle from '../Battle';

const mapStateToProps = ({ opponentPkmn, playerPkmn }) => ({
  opponentPkmn,
  playerPkmn,
});

export default connect(mapStateToProps, {})(Battle);
