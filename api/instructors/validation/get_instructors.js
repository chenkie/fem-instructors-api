'use strict';

const Joi = require('joi');

// We know that the only options for sortDirection
// are 'asc' and 'desc' and for sortKey are 'id',
// 'name', and 'slug
const queryValidator = Joi.object({
  
});

module.exports = { queryValidator };
