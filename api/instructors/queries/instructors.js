'use strict';

const Boom = require('boom');
let instructorsData = require('../../../data/instructors');

const verifyUniqueInstructor = (req, res) => {
  const name = req.payload.name;
  const instructorExists = instructorsData.some(instructor => instructor.name === name);
  if (instructorExists) {
    return res(Boom.badRequest('Instructor exists'));
  }
  return res(req.payload);
}

const createInstructorSlug = (req, res) => {
  const name = req.payload.name;
  const slug = name.split(' ').join('-');
  res(slug.toLowerCase());
}

module.exports = { verifyUniqueInstructor, createInstructorSlug }