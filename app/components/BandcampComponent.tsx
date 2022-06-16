export const BandcampComponent = ({
  title,
  link,
  src,
}: {
  title: string;
  link: string;
  src: string;
}) => (
  <div>
    <h2>{title}</h2>
    <iframe
      style={{ border: "0", width: "350px", height: "442px" }}
      src={src}
      seamless
    >
      <a href={link}>{title}</a>
    </iframe>
  </div>
);
