import { useEffect, useState } from "react";
import ArrowRightIcon from "@components/common/ArrowRightIcon";
import ArrowLeftIcon from "@components/common/ArrowLeftIcon";

const HospitalImageCarosel = ({ imageData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  if (imageData.length > 0)
    return (
      <>
        <div className="space-y-4 flex-1 cursor-auto relative">
          <div className="aspect-w-2 aspect-h-2 ">
            <img src={imageData[currentSlide]} alt="hospital images" className="object-cover z-0" />
          </div>
          {currentSlide > 0 && (
            <button
              className="absolute z-10 top-1/2 left-2 w-7 h-7 text-gray-800 flex items-center justify-center rounded-full bg-white bg-opacity-50 hover:bg-opacity-75"
              onClick={prevSlide}
            >
              <ArrowLeftIcon />
            </button>
          )}
          {currentSlide + 1 < imageData.length && (
            <button
              className="absolute z-10 top-1/2 right-2 w-7 h-7 text-gray-800 flex items-center justify-center rounded-full bg-white bg-opacity-50 hover:bg-opacity-75"
              onClick={nextSlide}
            >
              <ArrowRightIcon />
            </button>
          )}
        </div>
      </>
    );
  return null;
};

export default HospitalImageCarosel;
