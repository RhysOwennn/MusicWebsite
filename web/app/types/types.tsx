export interface SongType {
  title: string;
  link: string;
  source: string;
}

export interface homepage {
  title: string;
  image: string;
}

export interface ListenInfo {
  bgImage: string;
  title: string;
  bandcampLinks: SongType[];
}
