import { combineReducers } from 'redux';
import { setupStore } from './setupStore';
import { registerStore } from './registerStore';
import { routerReducer } from 'react-router-redux'

export default function createReducer(asyncReducers) {
  return combineReducers({
    setupStore : setupStore,
    registerStore: registerStore,
    router: routerReducer,
    ...asyncReducers
  });
}
/*
export default combineReducers({
    setupStore,
    router: routerReducer
});
*/
