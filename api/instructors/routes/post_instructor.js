'use strict';

const query = require('./../queries/instructors');
let instructorsData = require('./../../../data/instructors');

module.exports = {
  method: 'POST',
  path: '/api/instructors',
  config: {
    pre: [
      { method: query.verifyUniqueInstructor },
      { method: query.createInstructorSlug, assign: 'slug' }
    ],
    handler: (req, res) => {

      let submittedData = req.payload;
      submittedData.slug = req.pre.slug;
      instructorsData.push(submittedData);

      res({ message: 'Instructor added!' });
    }
  }
}