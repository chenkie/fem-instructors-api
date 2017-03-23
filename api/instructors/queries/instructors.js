'use strict';

const Boom = require('boom');
const Wreck = require('wreck');
let instructorsData = require('../../../data/instructors');

const verifyUniqueInstructor = (request, reply) => {
  const name = request.payload.name;
  const existingInstructor = instructorsData.find(
    instructor => instructor.name === name
  );
  if (existingInstructor) {
    return reply(Boom.badRequest('Instructor exists'));
  }
  return reply(request.payload);
};

const createInstructorSlug = (request, reply) => {
  const name = request.payload.name;
  const slug = name.split(' ').join('-');
  reply(slug.toLowerCase());
};

const getGithubImage = (request, reply) => {
  const slug = request.params.slug;
  const githubUser = instructorsData.find(
    instructor => instructor.slug == slug
  ).github;

  const options = {
    headers: { 'User-Agent': 'fem-instructors-api' },
    json: true
  };
  Wreck.get(
    `https://api.github.com/users/${githubUser}`,
    options,
    (error, response, payload) => {
      if (error) return reply(Boom.badRequest(error));
      reply(payload.avatar_url);
    }
  );
};

module.exports = {
  verifyUniqueInstructor,
  createInstructorSlug,
  getGithubImage
};
