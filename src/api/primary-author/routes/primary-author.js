'use strict';

/**
 * primary-author router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::primary-author.primary-author');

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/primary-authors/:slug',
      handler: 'primary-author.findOne',
      config: {
        auth: false,
      },
    }
  ]
}


