import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

// export const NextArrow = (props) => {
//   // const {className, style, onCLick} =props;
//   return (
//     <>
//       <div
//         className={props.className}
//         style={{
//           ...props.style,
//           backgroundColor: "rgb(153, 153, 153)",
//           display: "flex",
//           right: "0",
//           justifyContent: "center",
//           alignItems: "center",
//           position: "absolute",
//           cursor: "pointer",
//           width: "40px",
//           height: "40px",
//           borderRadius: "20px",
//           fontFamily: "slick",
//           fontSize: "20px",
//           content: "'\\2192'",
//           lineHeight: "1",
//           opacity: "0.75",
//           color: "rgb(153, 153, 153)",
//         }}
//         onClick={props.onClick}
//       />

//     </>
//   );
// };
export const NextArrow = ({ onClick, direction }) => (
  <button
    className={`slider-arrow ${direction} absolute top-2/4 right-0 mr-4 transform -translate-y-1/2 right-2 focus:outline-none p-2 rounded-full z-10`}
    onClick={onClick}
    style={{ backgroundColor: "rgb(227, 205, 205)" }}
  >
    <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
  </button>
);


// export const PrevArrow = (props) => {
//   // const {className, style, onCLick} =props;
//   return (
//     <>
//       <div
//         className={props.className}
//         style={{
//           ...props.style,
//           backgroundColor: "rgb(153, 153, 153)",
//           display: "flex",
//           right: "0",
//           justifyContent: "center",
//           alignItems: "center",
//           position: "absolute",
//           cursor: "pointer",
//           width: "40px",
//           height: "40px",
//           borderRadius: "20px",
//           fontFamily: "slick",
//           fontSize: "20px",
//           lineHeight: "1",
//           opacity: "0.75",
//           color: "rgb(153, 153, 153)",
//         }}
//         onClick={props.onClick}
//       />
//     </>
//   );
// };
export const PrevArrow = ({ onClick, direction }) => (
  <button
    className={`slider-arrow ${direction} absolute top-2/4 left-0 mr-4 transform -translate-y-1/2 left-2 focus:outline-none p-2 rounded-full z-10`}
    onClick={onClick}
    style={{ backgroundColor: "rgb(227, 205, 205)" }}
  >
    <FontAwesomeIcon icon={faChevronLeft} className="text-gray-500" />
  </button>
);