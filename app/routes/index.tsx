import { HeroWrapper } from "../components/HeroWrapper";
import heroImage from "../../public/images/BG Images/sybersynhero.png";

export default function Index() {
  return (
    <>
      <HeroWrapper img={heroImage} component={<div></div>} />
    </>
  );
}
