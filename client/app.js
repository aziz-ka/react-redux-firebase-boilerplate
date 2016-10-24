import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { initAuth } from './auth';
import { configureStore } from './store';
import Root from './root';


const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);


function renderApp() {
  ReactDOM.render(
    <AppContainer>
      <Root history={history} store={store} />
    </AppContainer>,
    document.getElementById('app')
  );
}

if (module.hot) {
  module.hot.accept('./root', () => {
    const RootEl = require('./root').default;

    ReactDOM.render(
      <AppContainer>
        <RootEl history={history} store={store} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}


initAuth(store.dispatch)
  .then(() => renderApp())
  .catch(error => console.error(error)); // eslint-disable-line no-console
