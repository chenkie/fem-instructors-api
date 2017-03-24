'use strict';

const instructorsData = require('../../../data/instructors');
const sortBy = require('lodash').sortBy;

module.exports = {
  method: 'GET',
  path: '/api/instructors',
  config: {
    handler: (request, reply) => {

      // If there's no data to be found, throw back a 404

      // Let's get just the id, name, and slug when we make
      // a request for all instructors
      const trimmedData = instructorsData.map(instructor => {
        return {
          id: instructor.id,
          name: instructor.name,
          slug: instructor.slug
        };
      });

      // We can control the sorting key and direction
      // in a simple function that uses the sortBy function
      // from Lodash
      const sortDirection = request.query.sortDirection;
      const sortKey = request.query.sortKey;

      const sortData = (data, direction, key) => {
        if (direction === 'asc') {
          return sortBy(data, key);
        } else if (direction === 'desc') {
          return sortBy(data, key).reverse();
        } else {
          return data;
        }
      };

      reply(sortData(trimmedData, sortDirection, sortKey));
    }
  }
};
