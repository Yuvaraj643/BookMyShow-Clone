import React from "react";

export const NextArrow = (props) => {
  // const {className, style, onCLick} =props;
  return (
    <>
      <div
        className={props.className}
        style={{ ...props.style, backgroundColor: "black",
     }}
        onClick={props.onClick}
      />
    </>
  );
};

export const PrevArrow = (props) => {
  // const {className, style, onCLick} =props;
  return (
    <>
      <div
        className={props.className}
        style={{ ...props.style, backgroundColor: "black"
         }}
        onClick={props.onClick}
      />
    </>
  );
};
