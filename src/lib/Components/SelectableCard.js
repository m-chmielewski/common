import React from "react";

import "./SelectableCard.css";

import Checkbox from "./Checkbox";

const SelectableCard = props => {
 return (
  <div
   className={`card selectable-card ${props.selected ? "selected" : ""}`}
   tabIndex={0}
   onClick={props.onClick}
  >
   <Checkbox checked={props.selected} />
   {props.children}
  </div>
 );
};

export default SelectableCard;
