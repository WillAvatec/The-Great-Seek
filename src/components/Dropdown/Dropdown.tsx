import { Coords, Target } from "../../types/types.ts";
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
                return (
                  <li id={target[0]} key={target[0]}>
                    <img src={target[1].img} />
                    <div className="target-info">
                      <h4 className="target--name">{target[0]}</h4>
                    </div>
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
