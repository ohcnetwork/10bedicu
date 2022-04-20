import { useState } from "react/";
import CloseIcon from "@components/common/CloseIcon";

const HospitalPhotoGallery = ({ photos, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!photos) return <></>;

  if (photos.length === 0) return <></>;

  return (
    <div className="fixed h-screen w-full top-0 left-0 z-50 bg-gray-900 text-white flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 text-gray-800 flex items-center justify-center rounded-full bg-white"
      >
        <CloseIcon />
      </button>
      <div className="h-4/5 w-full flex items-center justify-center">
        <img
          src={photos[currentIndex]}
          className="object-cover h-full"
          alt="Hospital Image"
        />
      </div>
    </div>
  );
};

export default HospitalPhotoGallery;
