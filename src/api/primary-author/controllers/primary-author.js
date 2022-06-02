'use strict';

/**
 *  primary-author controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::primary-author.primary-author');

module.exports = createCoreController("api::primary-author.primary-author", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.db.query("api::primary-author.primary-author").findOne({
      where: { slug },
    });

    // console.log(entity);
    // const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    // console.log(sanitizedEntity);

    // return this.transformResponse(sanitizedEntity);
    return this.transformResponse(entity);
  },
}));
