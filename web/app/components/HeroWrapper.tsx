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
      <div className="hero-content text-primary">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-primary"></h1>
          <p className="mb-5"></p>
        </div>
      </div>
      <Footer />
    </div>
  </>
);
