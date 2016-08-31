import 'normalize.css';
import 'index.html'; // eslint-disable-line
import { render } from 'react-dom';
import React from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { MuiThemeProvider } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './containers/App';
import Home from './containers/Home';
import Login from './containers/Login';
import Location from './containers/Location';
import * as reducers from './reducers';


injectTapEventPlugin();
const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(thunk));

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="login" component={Login} />
          <Route path="location" component={Location} />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root'));
