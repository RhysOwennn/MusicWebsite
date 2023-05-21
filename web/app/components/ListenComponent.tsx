import { BandcampComponent } from "../components/BandcampComponent";
import { SongType } from "~/types/types";
import { Key } from "react";

export const ListenComponent = ({ songList }: { songList: SongType[] }) => (
  <>
    <div className="hero mt-24">
      <div className="grid xl:grid-flow-col lg:grid-cols-2">
        {songList.map((song: SongType, index: Key) => (
          <BandcampComponent
            key={index}
            title={song.title}
            link={song.link}
            src={song.source}
          />
        ))}
      </div>
    </div>
  </>
);
