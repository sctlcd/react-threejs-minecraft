import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import ReactTooltip from "react-tooltip";

export const Controls = () => {
  const [show, setShow] = useState(true);

  const controls = [
    {
      action: "Movements",
      controls: "W/S/D/A",
    },
    {
      action: "Sprint",
      controls: "LShift",
    },
    {
      action: "Jump",
      controls: "Space",
    },
    {
      action: "Add Cube",
      controls: "LClick",
    },
    {
      action: "Remove Cube",
      controls: "Alt+LClick",
    },
    {
      action: "Change Material",
      controls: "1-0",
    },
  ];

  return (
    <div className={`absolute controls ${!show ? "fixed-height" : ""}`}>
      <FontAwesomeIcon
        icon={icon({ name: "circle-info", style: "solid" })}
        className="info-icon"
        data-tip
        data-for="tooltip"
      />
      <ReactTooltip
        id="tooltip"
        place="right"
        effect="float"
        className="customTheme"
      >
        <span>
          For better accuracy, when clicking to lock the cursor to the mouse,
          click as close as you can to the cursor. That aligns the camera center
          and the mouse.
        </span>
      </ReactTooltip>
      <h4>Controls</h4>

      {controls.map((control) => (
        <div className="control" key={control.action}>
          <p>{control.action}</p>
          <p>{control.controls}</p>
        </div>
      ))}

      <div
        className={`toggle ${show ? "rotate" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          setShow((prev) => !prev);
        }}
      >
        &darr;
      </div>
    </div>
  );
};
