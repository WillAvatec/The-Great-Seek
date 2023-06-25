import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import TargetObject from "./TargetObject.tsx";

describe("Target Object in Dropdown Menu", () => {
  it("must show the name of the target", () => {
    render(<TargetObject name="TEST-NAME" picture="TEST-URL" />);

    const targetName = screen.queryByText("TEST-NAME");
    const targetImg = screen.queryByAltText("target-TEST-NAME");
    expect(targetName).toBeTruthy();
    expect(targetImg).toBeTruthy();
  });

  describe("When clicked", () => {
    it("should return false if the target Coords in Context don't match", () => {
      userEvent.setup();
      render(<TargetObject name="TEST-NAME" picture="TEST-URL" />);
    });
  });
});
