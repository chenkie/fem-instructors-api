'use strict';

module.exports = {
  method: 'GET',
  path: '/api/images/{name}',
  config: {
    handler: (request, reply) => {
      const image = request.params.name;

      reply.file(image);
    }
  }
};
