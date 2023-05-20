import portrait from "../../public/images/about image/Portrait.png";
import { Link } from "@remix-run/react";

export const AboutComponent = () => (
  <div>
    <div className="hero mt-36">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={portrait} className=" shadow-2xl w-2/4 rounded-3xl" />
        <div>
          <h1 className="text-5xl font-bold">Sybersyn</h1>
          <p className="py-6">
            Sybersyn started as a vague idea some years ago, <br /> I'd been
            making music for some years.
          </p>
          <Link to={"/subscribe"}>
            <button className="btn btn-primary">Subscribe</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
