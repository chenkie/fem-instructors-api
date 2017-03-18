'use strict';

const instructorsData = require('../../../data/instructors');

module.exports = {
  method: 'GET',
  path: '/api/instructors/{slug}',
  config: {
    handler: (req, res) => {

      const instructor = instructorsData.filter(
        instructor => instructor.slug === req.params.slug
      )[0];

      if (!instructor) {
        return res('no instructor found');
      }

      res(instructor);
    }
  }
};
