module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/posts/:slug',
      handler: 'post.findOne',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/posts',
      handler: 'post.findMany',
      config: {
        auth: false,
      },
    },
  ]
}
