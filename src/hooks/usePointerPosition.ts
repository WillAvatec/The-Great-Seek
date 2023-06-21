import { useState, MouseEvent } from "react";
import { Coords } from "./types/types";
import { MouseMock } from "../utils/mocks/getMouseEvent";

function usePointerPosition() {
  const [position, setPosition] = useState<Coords>({ x: 0, y: 0 });
  const [offset, setOffset] = useState<Coords>({ x: 0, y: 0 });
  const followMouse = (e: MouseEvent | MouseMock) => {
    setPosition({ x: e.pageX, y: e.pageY });
    setOffset({ x: window.scrollX, y: window.scrollY });
  };

  return { position, offset, followMouse };
}

export { usePointerPosition };
