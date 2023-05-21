export const config = {
  apiVersion: process.env.SANITY_API_VERSION || "2021-03-25",
  dataset: process.env.SANITY_DATASET || "production",
  projectId: process.env.SANITY_PROJECT_ID || "",
};
