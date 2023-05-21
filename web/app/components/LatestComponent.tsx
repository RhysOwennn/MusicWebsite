export const LatestComponent = ({ src }: { src: string }) => (
  <div>
    <div className="hero mt-24">
      <div className="hero-content">
        <iframe
          style={{ border: "0", width: 800, height: 630 }}
          src={src}
          seamless
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
);
