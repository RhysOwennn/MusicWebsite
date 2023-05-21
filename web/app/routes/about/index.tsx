import { AboutComponent } from "~/components/AboutComponent";
import { HeroWrapper } from "~/components/HeroWrapper";
import { client, imageUrlForSource } from "~/lib/sanity";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const query = `*[_type == "about"]`;
  const aboutInfo = await client.fetch(query);

  const aboutInfoProcessed = aboutInfo[0];
  const backgroundImage = imageUrlForSource(aboutInfoProcessed.bgimage)
    ?.crop("focalpoint")
    .dpr(1)
    .format("webp")
    .url();

  const portraitImage = imageUrlForSource(aboutInfoProcessed.image)
    ?.crop("focalpoint")
    .dpr(1)
    .format("webp")
    .url();

  return { aboutInfo: aboutInfoProcessed, backgroundImage, portraitImage };
};
export default function Index() {
  const { aboutInfo, backgroundImage, portraitImage } = useLoaderData();

  return (
    <>
      <HeroWrapper
        component={
          <AboutComponent aboutInfo={""} portraitImage={portraitImage} />
        }
        img={backgroundImage}
      />
    </>
  );
}
