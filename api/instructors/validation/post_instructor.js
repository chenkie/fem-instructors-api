'use strict';

const Joi = require('joi');

// We want 'name' and 'email' to be required
// and for the Twitter handle to have an @ symbol
// and be a max of 15 characters
const payloadValidator = Joi.object({
  
});

module.exports = { payloadValidator };
