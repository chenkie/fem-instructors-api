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
    handler: (request, reply) => {
      let instructor = instructorsData.find(
        instructor => instructor.slug === request.params.slug
      );

      // If no instructor is found, let's use Boom
      // to send back a 404
      if (!instructor) {
        return reply(Boom.notFound('Instructor not found!'));
      }

      // The image that is fetched in the getGithubImage
      // method is avaiable on the pre object at a key of 
      // 'image' because we assigned it that in the route
      // prereq
      instructor.avatar = request.pre.image;

      reply(instructor);
    },
    validate: {
      params: paramsValidator
    }
  }
};
