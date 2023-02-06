import { Link } from "@remix-run/react";
import portrait from "../../public/images/about image/Portrait.png";

export const AboutComponent = () => (
  <div>
    <div></div>
    <div className="hero mt-36">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={portrait} className=" shadow-2xl w-2/4 rounded-3xl" />
        <div>
          <h1 className="text-5xl font-bold">Sybersyn</h1>
          <p className="py-6">
            Sybersyn started as a vague idea some years ago, I'd been
            making music for years.
          </p>
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
);
