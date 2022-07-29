import React, { useState } from "react";
import "./CustomDropdown.css";

export default function CustomDropdown({options}) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Choose one");
//  console.log(options)
  return (  
    <div className="App">
      <div className="dropdown-custom-organization">
        <div
          onClick={(e) => {
            setIsActive(!isActive);
          }}
          className="dropdown-btn-custom"
        >
          {selected}
          {
        isActive ? <img src="../uparrow-icon.png"alt="up arrow"/ > : <img src="../uparrow-hover-icon.png" alt="down arrow"/>
          }
          
        </div>
        <div
          className="dropdown-content-custom"
          style={{ display: isActive ? "block" : "none" }}
        >
        {options.map((row) => {
            return (
          <div
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
            className="item-custom"
          >
            {row}
          </div>
            )
        })}
        </div>
      </div>
    </div>
  );
}












