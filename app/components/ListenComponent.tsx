import { BandcampComponent } from "../components/BandcampComponent";
import { previewList } from "~/components/SongPreviews";
import { SongType } from "~/types/types";
import { Key } from "react";

export const ListenComponent = () => (
  <>
    <div className="hero">
      <div className="flex flex-row">
        {previewList.map((song: SongType, index: Key) => (
          <BandcampComponent
            title={song.title}
            link={song.link}
            src={song.src}
          />
        ))}
      </div>
    </div>
  </>
);
