import React, { useEffect, forwardRef } from "react";

import "./Backdrop.css";

const Backdrop = forwardRef(function Backdrop(props, ref) {
 useEffect(() => {
  ref.current.addEventListener("click", () => {
   ref.current.classList.remove("visible");
   const overlays = document.getElementsByClassName("overlay");
   for (const overlay of overlays) {
    overlay.classList.remove("visible");
   }
  });
 }, [ref]);

 return (
  <div
   ref={ref}
   id="backdrop"
  ></div>
 );
});

export default Backdrop;
