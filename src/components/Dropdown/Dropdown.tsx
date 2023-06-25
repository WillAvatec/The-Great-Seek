import { Coords, Target } from "../../types/types.ts";
import TargetObject from "../TargetObject/TargetObject.tsx";
import "./Dropdown.scss";

function Dropdown({
  location,
  elements,
  render,
}: {
  readonly location: Coords;
  readonly elements: { [key: string]: Target } | undefined;
  readonly render: boolean;
}) {
  return (
    render && (
      <div id="click-point" style={{ top: location.y, left: location.x }}>
        <div id="dropdown-menu" style={{ top: "70px", left: "70px" }}>
          <ul>
            {elements &&
              Object.entries(elements).map((target) => {
                const [name, obj] = target;
                return (
                  <li id={name} key={name}>
                    <TargetObject name={name} picture={obj.img} />
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    )
  );
}

export default Dropdown;
