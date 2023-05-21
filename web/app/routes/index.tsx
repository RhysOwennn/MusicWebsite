import { HeroWrapper } from "../components/HeroWrapper";

import { client, imageUrlForSource } from "~/lib/sanity";
import { useLoaderData } from "@remix-run/react";
import { homepage } from "~/types/types";

export const loader = async () => {
  const query = `*[_type == "homepage"]`;
  const homeInfo: homepage[] = await client.fetch(query);

  const homeInfoProcessed = homeInfo[0];
  const imageUrl = imageUrlForSource(homeInfoProcessed.image)
    ?.crop("focalpoint")
    .dpr(1)
    .format("webp")
    .url();

  return { homeInfo: homeInfoProcessed, imageUrl };
};

export default function Index() {
  const { imageUrl } = useLoaderData();

  return (
    <>
      <HeroWrapper img={imageUrl} component={<div />} />
    </>
  );
}
