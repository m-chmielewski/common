import React from "react";

import "./SuggestiveInput.css";

// import Backdrop from "./Backdrop";

const SuggestiveInput = ({
 id,
 onInputChange,
 dropdownsHandle,
 listDown,
 options,
 groupName,
 fieldName,
 dataNature,
 ...props
}) => {
 return (
  <div className="suggestive-input-wrapper">
   {/* <Backdrop /> */}
   <label htmlFor={id}>{props.label}</label>
   <input
    id={id}
    type="text"
    value={props.value}
    placeholder={props.placeholder}
    onChange={event => {
     if (dataNature === "simple") {
      onInputChange(fieldName, event.target.value);
     } else {
      onInputChange(event.target.value, id.split("-")[2], groupName, fieldName);
     }
    }}
    onFocus={() => {
     if (dataNature === "simple") {
      dropdownsHandle(true, 0);
     } else {
      dropdownsHandle(true, id.split("-")[2]);
     }
    }}
   />
   <ul style={{ display: listDown ? "flex" : "none" }}>
    {options.map(option => {
     if (option.toLowerCase().includes(props.value.toLowerCase()))
      return (
       <li
        key={option}
        onClick={() => {
         if (dataNature === "simple") {
          onInputChange(fieldName, option);
         } else {
          onInputChange(option, id.split("-")[2], groupName, fieldName);
         }
        }}
        onKeyDown={event => {
         if (event.key === "Enter") {
          if (dataNature === "simple") {
           onInputChange(fieldName, option);
           dropdownsHandle(false, 0);
          } else {
           onInputChange(option, id.split("-")[2], groupName, fieldName);
           dropdownsHandle(false, id.split("-")[2]);
          }
         }
        }}
        tabIndex={0}
       >
        {option}
       </li>
      );
     return null;
    })}
   </ul>
  </div>
 );
};

export default SuggestiveInput;
