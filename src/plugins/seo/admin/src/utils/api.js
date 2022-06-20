// const fetchSeoComponent = async () => {
//   try {
//     const data = await request(`/seo/component`, { method: "GET" });
//     return data;
//   } catch (error) {
//     return null;
//   }
// };


import { request } from "@strapi/helper-plugin";
import pluginId from "../pluginId";
export const fetchContentTypes = async () => {
  try {
    const data = await request(`/${pluginId}/content-types`, { method: "GET" });
    return data;
  } catch (error) {
    return null;
  }
};
