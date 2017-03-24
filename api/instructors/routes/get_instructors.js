'use strict';

const instructorsData = require('../../../data/instructors');
const sortBy = require('lodash').sortBy;

module.exports = {
  method: 'GET',
  path: '/api/instructors',
  config: {
    handler: (request, reply) => {

      // Let's get just the id, name, and slug when we make
      // a request for all instructors

      // We can control the sorting key and direction
      // in a simple function that uses the sortBy function
      // from Lodash

      // reply with the data
    }
  }
};
