'use strict';

/**
 * primary-tag router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::primary-tag.primary-tag');

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/primary-tags/:slug',
      handler: 'primary-tag.findOne',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/primary-tags/:slug',
      handler: 'primary-tag.find',
      config: {
        auth: false,
      },
    }
  ]
}

