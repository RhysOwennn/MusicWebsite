import { HeroWrapper } from "../../components/HeroWrapper";

import { client, imageUrlForSource } from "~/lib/sanity";
import { useLoaderData } from "@remix-run/react";
import { homepage } from "~/types/types";
import { LatestComponent } from "~/components/LatestComponent";

interface LatestInfo {
  title: string;
  source: string;
  bgImage: string;
}

export const loader = async () => {
  const query = `*[_type == "latest"]`;
  const latestInfo = await client.fetch(query);

  const processedLatestInfo: LatestInfo = latestInfo[0];
  const imageUrl = imageUrlForSource(processedLatestInfo.bgImage)
    ?.crop("focalpoint")
    .dpr(1)
    .format("webp")
    .url();

  return { processedLatestInfo, imageUrl };
};

export default function Index() {
  const { processedLatestInfo, imageUrl } = useLoaderData();
  return (
    <>
      <HeroWrapper
        img={imageUrl}
        component={<LatestComponent src={processedLatestInfo.source} />}
      />
    </>
  );
}
