'use strict';

module.exports = {
  method: 'GET',
  path: '/api/images/{name}',
  config: {
    handler: (request, reply) => {
      // Let's grab the image name that is
      // passed as a path param

      // Log out the user's IP address.
      // We could use this to keep track
      // of where requests are coming from

      // Let's reply with the static file
    }
  }
};
