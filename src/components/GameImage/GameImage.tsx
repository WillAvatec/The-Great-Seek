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
  const imgRef = useRef<HTMLImageElement>();

  const handleClick: MouseEventHandler = (e) => {
    // Get proportions of Image Element
    const bounds: DOMRect = imgRef.current?.getBoundingClientRect();
    const { left, top, width, height } = bounds;
    // Discount the coordinates valuesof the DOMRect
    const x = e.clientX - left;
    const y = e.clientY - top;
    // Convert to percentage
    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;
    setCoord(() => {
      return { x: xPercent, y: yPercent };
    });
    // Toggle dropdown Menu
    active.current = !active.current;
  };

  return (
    <div id="game-container">
      <Dropdown render={active.current} location={coord} elements={targets} />
      <img ref={imgRef} onClick={handleClick} src={imgUrl} />
    </div>
  );
}

export default GameImage;
