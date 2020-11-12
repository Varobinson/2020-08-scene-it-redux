import { applyMiddleware, createStore } from 'redux';
import { load, save } from 'redux-localstorage-simple';
import { rootReducer } from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  save()
)(createStore)


export const store = createStoreWithMiddleware(
  rootReducer,
  load(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()