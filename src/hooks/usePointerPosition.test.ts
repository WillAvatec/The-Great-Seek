import { describe, expect, it, test } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { Coords } from "./types/types";
import { MouseMock } from "../utils/mocks/getMouseEvent";
import { usePointerPosition } from "./usePointerPosition";

describe("usePointer hook default values", () => {
  test("Initial values", () => {
    const { result } = renderHook(() => usePointerPosition());
    const { position, offset } = result.current;

    expect(position).toEqual<Coords>({ x: 0, y: 0 });
    expect(offset).toEqual<Coords>({ x: 0, y: 0 });
  });

  it("Changes position whenever followMouse is called", () => {
    const { result, rerender } = renderHook(() => usePointerPosition());

    const mockMouseEvent: MouseMock = {
      pageX: 100,
      pageY: 200,
    };

    act(() => {
      result.current.followMouse(mockMouseEvent);
    });

    rerender(true);

    expect(result.current.position).toEqual<Coords>({ x: 100, y: 200 });
  });
});
