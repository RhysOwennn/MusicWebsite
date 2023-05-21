import { useLoaderData } from "@remix-run/react";
import { HeroWrapper } from "~/components/HeroWrapper";
import { ListenComponent } from "~/components/ListenComponent";
import { client, imageUrlForSource } from "~/lib/sanity";
import { ListenInfo } from "~/types/types";

export const loader = async () => {
  const query = `*[_type == "listen"]`;
  const listenInfo = await client.fetch(query);

  const processedListenInfo: ListenInfo = listenInfo[0];
  const imageUrl = imageUrlForSource(processedListenInfo.bgImage)
    ?.crop("focalpoint")
    .dpr(1)
    .format("webp")
    .url();

  return { processedListenInfo, imageUrl };
};

export default function Index() {
  const { processedListenInfo, imageUrl } = useLoaderData();

  return (
    <HeroWrapper
      img={imageUrl}
      component={
        <ListenComponent songList={processedListenInfo.bandcampLinks} />
      }
    />
  );
}
