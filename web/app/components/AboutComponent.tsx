import { Link } from "@remix-run/react";

export const AboutComponent = (
  { aboutInfo, portraitImage }: { aboutInfo: string; portraitImage: string } // TODO use about info for content
) => (
  <div>
    <div className="hero mt-36">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={portraitImage} className=" shadow-2xl w-2/4 rounded-3xl" />
        <div>
          <h1 className="text-5xl font-bold">Sybersyn</h1>
          <p className="py-6">
            Sybersyn started as a vague idea some years ago..
          </p>

          <Link to={"/subscribe"}>
            <button className="btn btn-primary">Subscribe</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
