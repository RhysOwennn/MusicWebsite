import { PortableText } from "@portabletext/react";

export const AboutComponent = (
  { aboutInfo, portraitImage }: { aboutInfo: any; portraitImage: string } // TODO use about info for content
) => (
  <div className="hero mt-52">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img
        src={portraitImage}
        className="shadow-2xl w-2/4 lg:rounded-3xl invisible lg:visible md:visible"
      />
      <div>
        <h1 className="text-5xl font-bold text-sytertiary">Sybersyn</h1>
        <p className="py-6 text-sytertiary">
          <PortableText value={aboutInfo} />
        </p>
      </div>
    </div>
  </div>
);
