'use strict';

/**
 *  primary-tag controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::primary-tag.primary-tag", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.db.query("api::primary-tag.primary-tag").findOne({
      where: { slug },
    });

    // console.log(entity);
    // const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    // console.log(sanitizedEntity);

    // return this.transformResponse(sanitizedEntity);
    return this.transformResponse(entity);
  },
}));
