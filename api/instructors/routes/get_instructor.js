'use strict';

const query = require('./../queries/instructors');
const instructorsData = require('../../../data/instructors');

module.exports = {
  method: 'GET',
  path: '/api/instructors/{slug}',
  config: {
    handler: (request, reply) => {
      let instructor = instructorsData.find(
        instructor => instructor.slug === request.params.slug
      );

      // The image that is fetched in the getGithubImage
      // method is avaiable on the pre object at a key of 
      // 'image' because we assigned it that in the route
      // prereq
      instructor.avatar = request.pre.image;

      reply(instructor);
    }
  }
};
