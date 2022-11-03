import { useState } from "react";

export const Controls = () => {
  const [show, setShow] = useState(true);

  const controls = [
    {
      action: 'Movements',
      controls: 'W/S/D/A'
    },
    {
      action: 'Sprint',
      controls: 'LShift'
    },
    {
      action: 'Jump',
      controls: 'Space'
    },
    {
      action: 'Add Cube',
      controls: 'LClick'
    },
    {
      action: 'Remove Cube',
      controls: 'Alt+LClick'
    },
    {
      action: 'Change Material',
      controls: '1-5'
    },
  ];

  return (
    <div className={`absolute controls ${!show ? 'fixed-height' : ''}`}>
      <h4>Controls</h4>

      {controls.map(control => (
        <div className="control" key={control.action}>
          <p>{control.action}</p>
          <p>{control.controls}</p>
        </div>
      ))}

      <div className={`toggle ${show ? 'rotate' : ''}`} onClick={(e) => {
        e.stopPropagation();
        setShow(prev => !prev)
      }}>&darr;</div>
    </div>
  );
};