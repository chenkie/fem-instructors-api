'use strict';

const query = require('./../queries/instructors');
let instructorsData = require('./../../../data/instructors');

module.exports = {
  method: 'POST',
  path: '/api/instructors',
  config: {
    handler: (request, reply) => {
      let submittedData = request.payload;
      submittedData.id = instructorsData.length + 1;
      submittedData.slug = request.pre.slug;
      instructorsData.push(submittedData);

      // The way we respond depends on what we want
      // to do in the app afterwards
      // reply({ message: 'Instructor added!' });

      // respond with the newly created instructor
    }
  }
};
