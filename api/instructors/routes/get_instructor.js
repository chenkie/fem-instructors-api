'use strict';

const Boom = require('boom');
const query = require('./../queries/instructors');
const instructorsData = require('../../../data/instructors');
const paramsValidator = require('./../validation/get_instructor').paramsValidator;

module.exports = {
  method: 'GET',
  path: '/api/instructors/{slug}',
  handler: (request, reply) => {
    let instructor = instructorsData.find(
      instructor => instructor.slug === request.params.slug
    );

    if (!instructor) {
      return reply(Boom.badRequest('Instructor not found!'));
    }

    instructor.avatar = request.pre.image;

    reply(instructor);
  },
  config: {
    pre: [{ method: query.getGithubImage, assign: 'image' }],
    validate: {
      params: paramsValidator
    }
  }
};
