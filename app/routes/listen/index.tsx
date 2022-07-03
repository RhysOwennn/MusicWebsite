import { HeroWrapper } from "~/components/HeroWrapper";
import ListenComponent from "~/components/ListenComponent";
import heroImage from "../../../public/images/BG Images/heronocircle.png";

export default function Index() {
  return (
    <>
      <HeroWrapper img={heroImage} component={<ListenComponent />} />
    </>
  );
}
