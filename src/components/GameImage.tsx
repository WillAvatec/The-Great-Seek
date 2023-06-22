import { MouseEventHandler, useState, useRef } from "react";
import { useImage } from "../hooks/useImage";
import Dropdown from "./Dropdown/Dropdown.tsx";

function GameImage() {
  // const { position, followMouse, offset } = usePointerPosition();
  const { targets, author, imgUrl } = useImage();
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  const active = useRef(true);

  const handleClick: MouseEventHandler = (e) => {
    setCoord({ x: e.pageX - window.scrollX, y: e.pageY - window.screenY });
    active.current = !active.current;
  };

  console.log("gameimage");
  return (
    <div id="game-container">
      {/* <TargetPointer position={position} offset={offset} /> */}
      <Dropdown render={active.current} location={coord} elements={targets} />
      <img onClick={handleClick} src={imgUrl} />
    </div>
  );
}

export default GameImage;
