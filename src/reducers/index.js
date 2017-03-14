import {combineReducers} from 'redux';

// import reducers from this folder
// reducers are functions which works with slices of store
import flashMessages from './flashMessages';

const rootReducer = combineReducers({
  flashMessages
});

export default rootReducer;
