const HospitalListCard = ({
  hospital_name,
  district,
  summary,
  collector_photo,
  collector_name,
  hospital_photos,
  donors,
  launch_date,
}) => {
  return (
    <div className="overflow-hidden rounded-2xl shadow-lg h-full">
      <div className="px-6 py-4">
        <div className="font-bold text-3xl md:text-5xl mb-2  text-gray-700">
          {district} District
        </div>
        <div className="font-bold text-xl md:text-3xl mb-2  text-gray-500">
          {hospital_name}
        </div>
        <div className="flex flex-col md:flex-row w-full mt-6 space-y-6">
          <div className="flex items-center justify-center flex-col md:w-1/3">
            <img
              className="object-cover shadow-lg h-40 w-40 rounded-full"
              src={collector_photo}
              alt={collector_name}
            ></img>
            <div className="text-lg leading-6 font-medium space-y-1 mt-4 text-center">
              <h3>{collector_name}</h3>
              <p className="text-indigo-600">District Collector</p>
            </div>
          </div>
          <div className="text-lg md:w-2/3">
            <p className="text-gray-500 text-justify">{summary}</p>
          </div>
        </div>
      </div>
      <div className="space-y-6 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 sm:space-y-0 lg:grid-cols-2 lg:gap-x-4 px-6 py-4">
        {hospital_photos.map((photo, i) => {
          return (
            <div className="space-y-4" key={i}>
              <div className="aspect-w-3 aspect-h-2">
                <img
                  className="object-cover shadow-lg rounded-lg"
                  src={photo}
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="mx-auto px-6 py-8">
        <h2 className="text-center text-2xl font-bold">
          {donors.length > 1 ? "Donors" : "Donor"}
        </h2>
        <div className="mt-4 flex flex-col md:flex-row item-center justify-center">
          {donors.map((donor, i) => {
            return (
              <div
                key={i}
                className="md:w-1/3 flex flex-col flex-wrap justify-center py-8 px-8 "
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    className="object-cover shadow-lg rounded-full"
                    src={donor.image}
                    alt={donor.name}
                  />
                </div>
                <div className="text-lg leading-6 font-medium space-y-1 mt-4 text-center">
                  <h3> {donor.name}</h3>
                  <p className="text-indigo-600">{donor.location}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="px-6 py-4">
          <span>Go Live on:</span>
          <span className="text-xl ml-2 font-bold">{launch_date}</span>
        </div>
      </div>
    </div>
  );
};

export default HospitalListCard;
