import { default as _ReactPlayer } from "react-player/lazy";
import { ReactPlayerProps } from "react-player/types/lib";
const ReactPlayer = _ReactPlayer as any as React.FC<ReactPlayerProps>;

export default function Index() {
  return (
    <div className="hero min-h-screen bg-tertiary">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-primary">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Listen now!</h1>
        </div>
        <div>
          <ReactPlayer url={"https://www.youtube.com/watch?v=U75pVhDpLwI"} />
        </div>
      </div>
    </div>
  );
}
