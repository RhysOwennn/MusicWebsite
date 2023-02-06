import { HeroWrapper } from "~/components/HeroWrapper";
import { SubscribeForm } from "~/components/SubscribeForm";
import heroImage from "../../../public/images/BG Images/heronocircle.png";

export default function Index() {
  return (
    <>
      <HeroWrapper img={heroImage} component={<SubscribeForm />} />
    </>
  );
}
