'use strict';

const instructorsData = require('../../../data/instructors');

module.exports = {
  method: 'GET',
  path: '/api/instructors/{slug}',
  config: {
    handler: (request, reply) => {
      // get the specified instructor

      // reply with the data
    }
  }
};
