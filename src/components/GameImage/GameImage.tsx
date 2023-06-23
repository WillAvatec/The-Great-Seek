import { MouseEventHandler, useState, useRef } from "react";
import { useImage } from "../../hooks/useImage.ts";
import Dropdown from "../Dropdown/Dropdown.tsx";
import "./GameImage.scss";

const DROPDOWN_POINTER_WIDTH = 110; //px
const DROPDOWN_POINTER_HEIGHT = 110; //px

function GameImage() {
  // const { position, followMouse, offset } = usePointerPosition();
  const { targets, author, imgUrl } = useImage();
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  const active = useRef(false);

  const handleClick: MouseEventHandler = (e) => {
    setCoord({
      x: e.pageX - DROPDOWN_POINTER_WIDTH / 2,
      y: e.pageY - DROPDOWN_POINTER_HEIGHT / 2,
    });
    active.current = !active.current;
    console.log(coord);
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
