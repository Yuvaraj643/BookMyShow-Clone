import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const NextArrow = ({ onClick, direction }) => (
    <button
      className={`slider-arrow ${direction} absolute top-44 right-0  transform -translate-y-1/2 right-2 focus:outline-none p-2 rounded-full`}
      onClick={onClick}
      style={{ backgroundColor: "rgb(153, 153, 153)" }}
    >
      <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
    </button>
  );
  
  const PrevArrow = ({ onClick, direction }) => (
    <button
      className={`slider-arrow ${direction} absolute top-44 left-0 mr-4 transform -translate-y-1/2 left-2 focus:outline-none p-2 rounded-full z-10`}
      onClick={onClick}
      style={{ backgroundColor: "rgb(153, 153, 153)" }}
    >
      <FontAwesomeIcon icon={faChevronLeft} className="text-gray-500" />
    </button>
  );

const settings ={
    infinite: true,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    InitialSlide : 0,
    nextArrow: <NextArrow direction="next" />,
    prevArrow: <PrevArrow direction="prev" />,
    responsive : [
        {
            breakpoint: 1024,
            settings:{
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },{
            breakpoint: 600,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },{
            breakpoint: 400,
            settings:{
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
};

export default settings