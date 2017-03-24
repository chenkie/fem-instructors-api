'use strict';

const Wreck = require('wreck');
let instructorsData = require('../../../data/instructors');

// When someone goes to create a new instructor, we
// should check whether they exist already. This is a good
// use case for route prerequisites
const verifyUniqueInstructor = (request, reply) => {

};

// We need to create a slug for the instructor.
// This could be done without much fuss right in the
// handler, but why not let it be done in the route
// prereq instead
const createInstructorSlug = (request, reply) => {

};

// Route prerequisites support both sync and async
// operations. The reply interface in the handler
// won't be called until this request is fulfilled
const getGithubImage = (request, reply) => {

};

module.exports = {
  verifyUniqueInstructor,
  createInstructorSlug,
  getGithubImage
};
