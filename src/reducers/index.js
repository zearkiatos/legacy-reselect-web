import { combineReducers } from 'redux';
import postReducers from './postReducers';
import selectedPostReducers from './selectedPostReducers'

const rootReducer = combineReducers({
  posts: postReducers,
  selectedPostIds: selectedPostReducers
});

export default rootReducer;