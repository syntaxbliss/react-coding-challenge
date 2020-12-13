import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState) {
  const store = createStore(reducers, initialState, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore();
