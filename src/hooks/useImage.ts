import { useState, useEffect } from "react";
import { getLevels } from "../../firebase.js";

interface Level {
  author: {
    name: string;
    url: string;
  };
  imgUrl: string;
  targets: object;
  thumbnail: string;
}

function useImage() {
  const [author, setAuthor] = useState();
  const [gameImage, setGameImage] = useState();
  const [targets, setTargets] = useState();
  const [thumb, setThumb] = useState();

  useEffect(() => {
    getLevels()
      .then((data) => {
        const { author, imgUrl, targets, thumbnail } = data[0];
        setAuthor(author);
        setGameImage(imgUrl);
        setTargets(targets);
        setThumb(thumbnail);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  return { author, img: gameImage, targets };
}

export { useImage };
