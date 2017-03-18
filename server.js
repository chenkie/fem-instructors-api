'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
  port: process.env.port || 3001,
  routes: {
    cors: {
      origin: ['*']
    }
  }
});

server.route(require('./api/instructors/routes/get_instructors'));
server.route(require('./api/instructors/routes/get_instructor'));
server.route(require('./api/instructors/routes/post_instructor'));

server.start(err => {
  if (err) throw err;
  console.log(`Server listening at ${server.info.uri}`);
});