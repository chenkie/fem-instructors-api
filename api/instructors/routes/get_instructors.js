'use strict';

const instructorsData = require('../../../data/instructors');

module.exports = {
  method: 'GET',
  path: '/api/instructors',
  config: {
    handler: (req, res) => { 

      res(instructorsData);
      
    }
  }
}