'use strict';

const instructorsData = require('../../../data/instructors');
const queryValidator = require('./../validation/get_instructors').queryValidator;
const sortBy = require('lodash').sortBy;

module.exports = {
  method: 'GET',
  path: '/api/instructors',
  config: {
    handler: (req, res) => {
      const sortDirection = req.query.sortDirection;
      const sortKey = req.query.sortKey;

      const sortData = (data, direction, key) => {
        if (direction === 'asc') {
          return sortBy(data, key);
        } else if (direction === 'desc') {
          return sortBy(data, key).reverse();
        } else {
          return data;
        }
      };

      res(sortData(instructorsData, sortDirection, sortKey));
    },
    validate: {
      query: queryValidator
    }
  }
};
