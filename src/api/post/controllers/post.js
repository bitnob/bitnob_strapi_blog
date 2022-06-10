"use strict";

/**  *  post controller
 */

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::post.post');

// path: ./src/api/post/controllers/post.js

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.db.query("api::post.post").findOne({
      where: { slug },
      populate: { primary_tag: true, primary_author: true },
    });

    // console.log(entity);
    // const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    // console.log(sanitizedEntity);

    // return this.transformResponse(sanitizedEntity);
    return this.transformResponse(entity);
  },

  async findMany(ctx) {
    const entity = await strapi.db.query("api::post.post").findMany({
      populate: { primary_tag: true, primary_author: true },
      orderBy: [{ published_timestamp: "desc" }, { createdAt: "desc" }],
      filters: {
        publishedAt: {
          $notContainsi: null,
        },
      },
    });

    // console.log(entity);
    // const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    // console.log(sanitizedEntity);

    // return this.transformResponse(sanitizedEntity);
    return this.transformResponse(entity);
  },
}));

// module.exports = createCoreController('api::post.post', ({ strapi }) =>  ({
//   async findOne(ctx) {
//     const {primary_tag, primary_author} = ctx.query;
//     console.log(primary_tag, primary_author)

//     const entity = await strapi.db.query('api::post.post').findMany({
//       populate: ['primary-tag', 'primary-author'],
//     });
//     console.log(entity)
//     const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
//     console.log(sanitizedEntity)

//     return this.transformResponse(sanitizedEntity);
//   }
// }));
