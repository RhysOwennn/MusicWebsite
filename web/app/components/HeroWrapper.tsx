import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export const HeroWrapper = ({
  img,
  component,
}: {
  img: string;
  component: any;
}) => (
  <>
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="hero-overlay bg-opacity-60">
        <NavBar />
        {component}
      </div>
      <Footer />
    </div>
  </>
);
