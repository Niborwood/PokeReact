// Create a Redux container for the App component.
import { connect } from 'react-redux';

import App from '../App';

const mapStateToProps = ({ isBattling }) => ({
  isBattling,
});

export default connect(mapStateToProps, {})(App);
