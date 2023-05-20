import { HeroWrapper } from "~/components/HeroWrapper";
import { SubscribeForm } from "~/components/SubscribeForm";
import heroImage from "../../../public/images/BG Images/heronocircle.png";
import { ActionFunction } from "@remix-run/node";

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

export default function Index() {
  return (
    <>
      <HeroWrapper img={heroImage} component={<SubscribeForm />} />
    </>
  );
}
