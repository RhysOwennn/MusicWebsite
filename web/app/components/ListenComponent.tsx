import { BandcampComponent } from "../components/BandcampComponent";
import { SongType } from "~/types/types";
import { Key } from "react";

export const ListenComponent = ({ songList }: { songList: SongType[] }) => (
  <>
    <div className="hero">
      <div className="flex flex-row">
        {songList.map((song: SongType, index: Key) => (
          <BandcampComponent
            title={song.title}
            link={song.link}
            src={song.source}
          />
        ))}
      </div>
    </div>
  </>
);
