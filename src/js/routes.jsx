const React = require('react');
const Router = require('react-router');
const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;
const NotFoundRoute = Router.NotFoundRoute;
const Redirect = Router.Redirect;
const routes = (
    <Route path="/" component={require('./home.jsx')} />
);

module.exports = routes;