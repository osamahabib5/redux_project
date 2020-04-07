import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer'
import logger from 'redux-logger'
//middleware logs information related to redux store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));
export default store;