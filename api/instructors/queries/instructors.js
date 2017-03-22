'use strict';

const Boom = require('boom');
const Wreck = require('wreck');
let instructorsData = require('../../../data/instructors');

const verifyUniqueInstructor = (req, res) => {
  const name = req.payload.name;
  const existingInstructor = instructorsData.find(
    instructor => instructor.name === name
  );
  if (existingInstructor) {
    return res(Boom.badRequest('Instructor exists'));
  }
  return res(req.payload);
};

const createInstructorSlug = (req, res) => {
  const name = req.payload.name;
  const slug = name.split(' ').join('-');
  res(slug.toLowerCase());
};

const getGithubImage = (req, res) => {
  const slug = req.params.slug;
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
      if (error) return res(Boom.badRequest(error));
      res(payload.avatar_url);
    }
  );
};

module.exports = {
  verifyUniqueInstructor,
  createInstructorSlug,
  getGithubImage
};
