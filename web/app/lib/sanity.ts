import { createClient } from "@sanity/client";
import { definePreview } from "@sanity/preview-kit";
import imageUrlBuilder from "@sanity/image-url";

export const projectId = process.env.SANITY_PROJECT_ID || "";
export const dataset = process.env.SANITY_DATASET || "production";
export const apiVersion = process.env.SANITY_API_VERSION || "2021-03-25";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
export const usePreview = definePreview({ projectId, dataset });

const builder = (preview = false) => imageUrlBuilder(client);
export const imageUrlForSource = (source: any, preview = false) =>
  !source ? undefined : builder(preview).image(source);
