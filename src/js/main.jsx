'use strict';
import createHistory from 'history/lib/createBrowserHistory';
window.$ = window.jQuery = require('jquery');

const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const routes = require('./routes.jsx');
const render = require('react-dom').render;
const history = createHistory();
render(<Router history={history}>{routes}</Router>, document.getElementById('app'));