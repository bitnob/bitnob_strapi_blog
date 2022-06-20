// module.exports = [
//   {
//     method: "GET",
//     path: "/component",
//     handler: "seo.findSeoComponent",
//     config: {
//       auth: false,
//       policies: [],
//     },
//   },
//   {
//     method: "POST",
//     path: "/component",
//     handler: "seo.createSeoComponent",module.exports = [
//   {
//     method: "GET",
//     path: "/content-types",
//     handler: "seo.findContentTypes",
//     config: {
//       auth: false,
//       policies: [],
//     },
//   },
// ];
//     config: {
//       auth: false,
//       policies: [],
//     },
//   },
//   {
//     method: "GET",
//     path: "/content-types",
//     handler: "seo.findContentTypes",
//     config: {
//       auth: false,
//       policies: [],
//     },
//   },
// ];


module.exports = [
  {
    method: "GET",
    path: "/content-types",
    handler: "seo.findContentTypes",
    config: {
      auth: false,
      policies: [],
    },
  },
];
