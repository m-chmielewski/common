import React from "react";

import "./Checkbox.css";

import { default as tick } from "../Icons/tick.svg";

const Checkbox = props => {
 return (
  <div className={`checkbox ${props.checked ? "checked" : ""}`}>
   <img
    src={tick}
    alt="Tick icon"
   />
  </div>
 );
};

export default Checkbox;
