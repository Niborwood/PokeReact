import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducer';
import battle from '../middlewares/battle';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(battle),
);

const store = createStore(reducer, enhancers);

export default store;
