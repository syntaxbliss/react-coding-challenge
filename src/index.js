import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import ErrorBoundary from './containers/ErrorBoundary';
import Modal from './containers/Modal';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
        <Modal />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
