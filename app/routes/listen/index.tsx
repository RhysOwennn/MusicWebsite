import { BandcampComponent } from "../../components/BandcampComponent";
import { previewList } from "~/components/SongPreviews";
import { songType } from "~/types/types";
import { Key } from "react";

export default function Index() {
  return (
    <>
      <div className="hero min-h-screen bg-tertiary">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-primary">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Listen now!</h1>
          </div>
          <div className="flex flex-row">
            {previewList.map((song: songType, index: Key) => (
              <BandcampComponent
                title={song.title}
                link={song.link}
                src={song.src}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
