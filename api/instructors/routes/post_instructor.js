'use strict';

const query = require('./../queries/instructors');
let instructorsData = require('./../../../data/instructors');
const payloadValidator = require('./../validation/post_instructor').payloadValidator;

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
      submittedData.id = instructorsData.length + 1;
      submittedData.slug = req.pre.slug;
      instructorsData.push(submittedData);

      // The way we respond depends on what we want
      // to do in the app afterwards
      // res({ message: 'Instructor added!' });
      res(instructorsData.find(item => item.slug == req.pre.slug));
    },
    validate: {
      payload: payloadValidator
    }
  }
};
