"use strict";


const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.db.query("api::post.post").findOne({
      where: { slug },
      populate: { primary_tag: true, primary_author: true },
    });

    return this.transformResponse(entity);
  },

  async findMany(ctx) {
    const entity = await strapi.db.query("api::post.post").findMany({
      populate: { primary_tag: true, primary_author: true },
      orderBy:  { publishedAt: "desc" },
      filters: {
        publishedAt: {
          $notContainsi: null,
        },
      },
    });
    return this.transformResponse(entity);
  },
}));

