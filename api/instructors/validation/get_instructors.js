'use strict';

const Joi = require('joi');

const queryValidator = Joi.object({
  sortDirection: Joi.string().valid(['asc', 'desc']),
  sortKey: Joi.string().min(2)
});

module.exports = { queryValidator };
