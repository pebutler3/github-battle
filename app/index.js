var React = require('react'),
    ReactDOM = require('react-dom'),
    routes = require('./config/routes'),
    Raven = require('raven-js');

var sentryKey = 'd9c9c61fb7c64d3eb8743c67bc7a899f',
    sentryApp = '92008',
    sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp;

var _APP_INFO = {
  name: 'Github Battle',
  branch: 'video4',
  version: '1.0'
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch
  }
}).install();

ReactDOM.render( routes, document.getElementById('app'));
