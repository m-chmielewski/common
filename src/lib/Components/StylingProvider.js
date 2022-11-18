import React from "react";

import "../Shared.css";

const StylingProvider = props => {
 if (props.regularVisionOn) {
  document.body.classList.add("regular-vision");
 } else {
  document.body.classList.remove("regular-vision");
 }

 return <>{props.children}</>;
};

export default StylingProvider;
