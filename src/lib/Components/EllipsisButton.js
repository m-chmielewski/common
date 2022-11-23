import React, { useRef } from "react";

import { default as ellipsisIcon } from "../Icons/ellipsis.svg";

import "./EllipsisButton.css";

import Backdrop from "./Backdrop";

const EllipsisButton = ({ options }) => {
 const menu = useRef(null);
 const backdrop = useRef(null);

 const showOverlay = () => {
  menu.current.classList.add("visible");
  backdrop.current.classList.add("visible");
 };

 const hideOverlay = () => {
  menu.current.classList.remove("visible");
  backdrop.current.classList.remove("visible");
 };

 return (
  <div className="ellipsis-btn-wrapper">
   <Backdrop ref={backdrop} />
   <button
    className="ellipsis-btn"
    onClick={showOverlay}
   >
    <img
     src={ellipsisIcon}
     alt="Menu button"
    />
   </button>
   <ul
    className="overlay"
    ref={menu}
   >
    {options.map(option => {
     return (
      <li
       key={option.name}
       onClick={() => {
        hideOverlay();
        option.action();
       }}
      >
       {option.name}
      </li>
     );
    })}
   </ul>
  </div>
 );
};

export default EllipsisButton;
