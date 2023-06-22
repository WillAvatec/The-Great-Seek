import { useState, useEffect } from "react";
import { getLevels } from "../../firebase.js";
import { LevelData } from "../types/types.js";

function useImage() {
  const [levelData, setLevelData] = useState<LevelData>();
  const [fetch, setIsFetch] = useState(true);

  useEffect(() => {
    if (!fetch) return;
    console.log("fetching");
    getLevels()
      .then((data) => {
        setLevelData(data[0] as unknown as LevelData);
        setIsFetch(false);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  return { ...levelData };
}

export { useImage };
