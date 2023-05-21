import { HeroWrapper } from "~/components/HeroWrapper";
import { SubscribeForm } from "~/components/SubscribeForm";
import { ActionFunction } from "@remix-run/node";
import { client, imageUrlForSource } from "~/lib/sanity";
import { useLoaderData } from "@remix-run/react";

export let action: ActionFunction = async ({ request }) => {
  {
    let formData = await request.formData();
    const email = formData.get("email_address");
    const name = formData.get("name");

    const API_KEY = process.env.CONVERTKIT_API_KEY;
    const FORM_ID = process.env.CONVERTKIT_FORM_ID;

    const API = "https://api.convertkit.com/v3";
    let res = await fetch(`${API}/forms/${FORM_ID}/subscribe`, {
      method: "post",
      body: JSON.stringify({ email, name, api_key: API_KEY }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });

    return res.json();
  }
};

export const loader = async () => {
  const query = `*[_type == "subscribe"]`;
  const subscribeInfo = await client.fetch(query);

  const processedSubscribeInfo = subscribeInfo[0];
  const imageUrl = imageUrlForSource(processedSubscribeInfo.bgImage)
    ?.crop("focalpoint")
    .dpr(1)
    .format("webp")
    .url();

  return { processedSubscribeInfo, imageUrl };
};

export default function Index() {
  const { processedSubscribeInfo, imageUrl } = useLoaderData();
  return (
    <>
      <HeroWrapper
        img={imageUrl}
        component={<SubscribeForm subscribeInfo={processedSubscribeInfo} />}
      />
    </>
  );
}
