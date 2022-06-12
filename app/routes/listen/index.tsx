export default function Index() {
  return (
    <div className="hero min-h-screen bg-tertiary">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-primary">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Listen now!</h1>
        </div>
        <div>
          <iframe
            style={{ border: "0", width: "350px", height: "442px" }}
            src="https://bandcamp.com/EmbeddedPlayer/track=3599125163/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
            seamless
          >
            <a href="https://sybersyn.bandcamp.com/track/i-dont-want-to-know">
              I don&#39;t want to know by Sybersyn
            </a>
          </iframe>
        </div>
      </div>
    </div>
  );
}
