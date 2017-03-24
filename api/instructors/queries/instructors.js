'use strict';

const Wreck = require('wreck');
let instructorsData = require('../../../data/instructors');

// When someone goes to create a new instructor, we
// should check whether they exist already. This is a good
// use case for route prerequisites
const verifyUniqueInstructor = (request, reply) => {
  const name = request.payload.name;
  const existingInstructor = instructorsData.find(
    instructor => instructor.name === name
  );
  if (existingInstructor) {
    return reply({ message: 'Instructor exists!' });
  }
  return reply();
};

// We need to create a slug for the instructor.
// This could be done without much fuss right in the
// handler, but why not let it be done in the route
// prereq instead
const createInstructorSlug = (request, reply) => {
  const name = request.payload.name;
  const slug = name.split(' ').join('-');
  reply(slug.toLowerCase());
};

// Route prerequisites support both sync and async
// operations. The reply interface in the handler
// won't be called until this request is fulfilled
const getGithubImage = (request, reply) => {
  const slug = request.params.slug;
  const githubUser = instructorsData.find(
    instructor => instructor.slug == slug
  ).github;

  if (!githubUser) return reply();
  
  const options = {
    headers: { 'User-Agent': 'fem-instructors-api' },
    json: true
  };
  Wreck.get(
    `https://api.github.com/users/${githubUser}`,
    options,
    (error, response, payload) => {
      reply(payload.avatar_url);
    }
  );
};

module.exports = {
  verifyUniqueInstructor,
  createInstructorSlug,
  getGithubImage
};
