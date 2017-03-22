'use strict';

const Joi = require('joi');

const paramsValidator = Joi.object({
  slug: Joi.string()
});

module.exports = { paramsValidator };
