import React from "react";

import "./ActiveHeading.css";

import EllipsisButton from "./EllipsisButton";

const ActiveHeading = props => {
 return (
  <div className="active-heading">
   {props.children}
   <EllipsisButton menuItems={props.menuItems} />
  </div>
 );
};

export default ActiveHeading;
