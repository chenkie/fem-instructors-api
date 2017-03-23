'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const Geolocate = require('hapi-geo-locate');
const path = require('path');

// Starting a Hapi server simply requires
// an instance of Hapi.Server. We leave it
// bare or we can add some configuration
const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: path.join(__dirname, 'public')
      }
    }
  }
});

// We need to specify a connection, which
// we can default to the port specified in
// an ENV variable, or 3001 if none is set.
// We also need to configure CORS for requests
// coming from a single page app
server.connection({
  port: process.env.port || 3001,
  routes: {
    cors: {
      origin: ['*']
    }
  }
});

// The simple way to register a plugin
// is to pass the module and a callback
server.register(Inert, () => {});

// To configure the plugin, we can pass
// an object which has an options key
server.register({
  register: Geolocate,
  options: {
    enabledByDefault: true
  }
}, err => {
  if (err) console.log(err);
});

// We're defining our route configuration in separate files
// and creating new routes with that configuration here
server.route(require('./api/instructors/routes/get_instructors'));
server.route(require('./api/instructors/routes/get_instructor'));
server.route(require('./api/instructors/routes/post_instructor'));
server.route(require('./api/images/routes/get_image'));

// Starting the server is as simple as calling
// server.start. We can throw an error if something
// goes wrong
server.start(err => {
  if (err) throw err;
  console.log(`Server listening at ${server.info.uri}`);
});
