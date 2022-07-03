import { AboutComponent } from "~/components/AboutComponent";
import { HeroWrapper } from "~/components/HeroWrapper";
import heroImage from "../../../public/images/about image/PortraitBg.png";
export default function Index() {
  return (
    <>
      <HeroWrapper component={<AboutComponent />} img={heroImage} />
    </>
  );
}
