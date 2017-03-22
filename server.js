'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const path = require('path');

const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: path.join(__dirname, 'public')
      }
    }
  }
});

server.connection({
  port: process.env.port || 3001,
  routes: {
    cors: {
      origin: ['*']
    }
  }
});

server.register(Inert, () => {});

server.route(require('./api/instructors/routes/get_instructors'));
server.route(require('./api/instructors/routes/get_instructor'));
server.route(require('./api/instructors/routes/post_instructor'));
server.route(require('./api/images/routes/get_image'));

server.start(err => {
  if (err) throw err;
  console.log(`Server listening at ${server.info.uri}`);
});