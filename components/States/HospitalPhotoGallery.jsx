import { useState } from "react/";
import CloseIcon from "@components/common/CloseIcon";
import ArrowRightIcon from "@components/common/ArrowRightIcon";
import ArrowLeftIcon from "@components/common/ArrowLeftIcon";

const HospitalPhotoGallery = ({ photos, onClose }) => {
  const [currentSelected, setCurrentSelected] = useState(0);

  if (!photos || photos.length === 0) return <></>;

  const onNext = () => {
    setCurrentSelected((prev) => {
      if (prev === photos.length - 1) return 0;
      return prev + 1;
    });
  };

  const onPrevious = () => {
    setCurrentSelected((prev) => {
      if (prev === 0) return photos.length - 1;
      return prev - 1;
    });
  };

  return (
    <div className="fixed h-screen w-full top-0 left-0 z-50 bg-black bg-opacity-95 text-white flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute z-50 top-5 right-5 w-10 h-10 text-gray-800 flex items-center justify-center rounded-full bg-white"
      >
        <CloseIcon />
      </button>
      <button
        onClick={onPrevious}
        className="absolute z-50 left-5 w-10 h-10 text-gray-800 flex items-center justify-center rounded-full bg-white"
      >
        <ArrowLeftIcon />
      </button>
      <button
        onClick={onNext}
        className="absolute z-50 right-5 w-10 h-10 text-gray-800 flex items-center justify-center rounded-full bg-white"
      >
        <ArrowRightIcon />
      </button>
      <div className="h-full z-20 pb-8 pt-14 px-5 gap-4 w-full flex items-center relative justify-center">
        <span className="inline-flex items-center absolute top-4 px-4 py-0.5 rounded font-medium bg-gray-100 text-gray-800">
          {photos[currentSelected].label}
        </span>
        <img
          src={photos[currentSelected].src}
          className="object-contain h-full"
          alt="Hospital Image"
        />
      </div>
    </div>
  );
};

export default HospitalPhotoGallery;
