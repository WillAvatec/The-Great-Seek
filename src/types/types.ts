interface Coords {
  x: number;
  y: number;
}

interface PointerProps {
  position: Coords;
  offset: Coords;
}

type LevelData =
  | {
      author: {
        name: string;
        url: string;
        imgUrl: `https${string}`;
      };
      targets: {
        [key: string]: Target;
      };
      imgUrl: string;
      thumbnail: string;
    }
  | undefined;

type Target = {
  img: string;
  pos: Coords;
};

export type { Coords, PointerProps, LevelData, Target };
