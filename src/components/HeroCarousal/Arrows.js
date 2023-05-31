import React from "react";

export const NextArrow = (props) => {
  // const {className, style, onCLick} =props;
  return (
    <>
      <div
        className={props.className}
        style={{
          ...props.style,
          backgroundColor: "rgb(153, 153, 153)",
          display: "flex",
          right: "0",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          cursor: "pointer",
          width: "40px",
          height: "40px",
          borderRadius: "20px",
          fontFamily: "slick",
          fontSize: "20px",
          content: "'\\2192'",
          lineHeight: "1",
          opacity: "0.75",
          color: "rgb(153, 153, 153)",
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
        style={{
          ...props.style,
          backgroundColor: "rgb(153, 153, 153)",
          display: "flex",
          right: "0",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          cursor: "pointer",
          width: "40px",
          height: "40px",
          borderRadius: "20px",
          fontFamily: "slick",
          fontSize: "20px",
          lineHeight: "1",
          opacity: "0.75",
          color: "rgb(153, 153, 153)",
        }}
        onClick={props.onClick}
      />
    </>
  );
};
