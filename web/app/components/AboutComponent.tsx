import { Link } from "@remix-run/react";

export const AboutComponent = (
  { aboutInfo, portraitImage }: { aboutInfo: string; portraitImage: string } // TODO use about info for content
) => (
  <div>
    <div className="hero lg:mt-36">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={portraitImage}
          className=" shadow-2xl w-2/4 lg:rounded-3xl invisible lg:visible md:visible"
        />
        <div>
          <h1 className="text-5xl font-bold">Sybersyn</h1>
          <p className="py-6">
            An artist from Cape Town, South Africa. Finding value in the unknown
            and forgotten. Inspired by sounds from all over the world, Sybersyn
            evokes an image of a network of digital roots beneath an ancient and
            mythical tree - often in seeking the unknown, in pushing up the
            skies we are drawn into the past. And the more we venture into the
            past, the more we discover portents of the future.
          </p>

          <Link to={"/subscribe"}>
            <button className="btn btn-primary">Subscribe</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
