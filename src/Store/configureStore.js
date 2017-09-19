import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware} from 'react-router-redux'
//import { fromJS } from 'immutable';
import createReducer from './Reducers';
//import createHistory from 'history/createBrowserHistory';

export default function configureStore(initialState = {}, history) {

  //const history = createHistory();
  //const middleware = routerMiddleware(history);
  const middlewares = [
    thunk,
    routerMiddleware(history),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const store = createStore(
        createReducer(),
        composeEnhancers(...enhancers)
      );

  store.asyncReducers = {};

      // Make reducers hot reloadable, see http://mxs.is/googmo
      /* istanbul ignore next */
      if (module.hot) {
        module.hot.accept('./Reducers', () => {
          import('./Reducers').then((reducerModule) => {
            const createReducers = reducerModule.default;
            const nextReducers = createReducers(store.asyncReducers);

            store.replaceReducer(nextReducers);
          });
        });
      }

      return store;
}
