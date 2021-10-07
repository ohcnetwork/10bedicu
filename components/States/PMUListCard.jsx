const PMUListCard = ({ name, image, description }) => {
  return (
    <div className="p-2 rounded-lg shadow">
      <div className="p-4">
        <div className="aspect-w-1 aspect-h-1">
          <img
            className="object-cover shadow-lg rounded-full"
            src={image}
            alt={name}
          />
        </div>
      </div>
      <div className="text-lg leading-6 font-semibold text-center mt-4">
        {name}
      </div>
      <div className="text-lg text-center mt-2">
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default PMUListCard;
