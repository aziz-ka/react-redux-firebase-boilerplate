import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { authReducer } from './auth';
import { tasksReducer } from './containers/Tasks/reducer';


export default combineReducers({
  routing: routerReducer,

  data: combineReducers({
    auth: authReducer,
    tasks: tasksReducer
  }),

  ui: {}
});
