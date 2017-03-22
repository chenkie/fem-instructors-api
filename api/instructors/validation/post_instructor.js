'use strict';

const Joi = require('joi');

const payloadValidator = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  github: Joi.string(),
  twitter: Joi.string().regex(/^(\@)[A-Za-z0-9_]{1,15}$/),
  courses: Joi.array().items(Joi.string())
});

module.exports = { payloadValidator };
