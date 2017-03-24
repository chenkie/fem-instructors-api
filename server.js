'use strict';

const Hapi = require('hapi');

// Starting a Hapi server simply requires
// an instance of Hapi.Server. We leave it
// bare or we can add some configuration
const server = new Hapi.Server();

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

server.route({
  method: 'GET',
  path: '/hello',
  handler: (request, reply) => {
    reply({ message: 'Hey there' });
  }
});

// Starting the server is as simple as calling
// server.start. We can throw an error if something
// goes wrong
server.start(err => {
  if (err) throw err;
  console.log(`Server listening at ${server.info.uri}`);
});
