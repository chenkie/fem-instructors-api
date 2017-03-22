'use strict';

const Boom = require('boom');
const query = require('./../queries/instructors');
const instructorsData = require('../../../data/instructors');
const paramsValidator = require('./../validation/get_instructor').paramsValidator;

module.exports = {
  method: 'GET',
  path: '/api/instructors/{slug}',
  config: {
    pre: [{ method: query.getGithubImage, assign: 'image' }],
    handler: (req, res) => {
      let instructor = instructorsData.find(
        instructor => instructor.slug === req.params.slug
      );

      if (!instructor) {
        return res(Boom.badRequest('Instructor not found!'));
      }

      instructor.avatar = req.pre.image;

      res(instructor);
    },
    validate: {
      params: paramsValidator
    }
  }
};
