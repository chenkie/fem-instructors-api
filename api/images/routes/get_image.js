'use strict';

module.exports = {
  method: 'GET',
  path: '/api/images/{name}',
  config: {
    handler: (req, res) => {
      const image = req.params.name;

      res.file(image);
    }
  }
};
