import { DEFAULT_AVATAR } from "@lib/constants";
import icons from "/data/icons.json";

const iconText = {
  site_space: "Space",
  site_electrical: "Electrical",
  site_internet: "Internet",
  site_oxygen: "Oxygen",
  equipment_ordered: "Ordered",
  equipment_delivered: "Delivered",
  equipment_installed: "Installed",
  equipment_staff_trained: "Staff Trained",
  tech_trained: "IT Staff Trained",
  tech_hospital_registration: "Hospital Registration",
  tech_patient_management: "Patient Management",
  tech_tele_icu_live: "Tele ICU Live",
};

const colorForIcon = (status) => {
  switch (status) {
    case "pending":
      return "text-red-500";
    case "in_progress":
      return "text-yellow-500";
    case "completed":
      return "text-green-500";
    default:
      return "text-red-500";
  }
};

const mapStatuses = (statuses, hospital) => {
  return statuses.map((item, i) => {
    return (
      <div key={i} className="py-2 px-2 flex items-center space-x-2">
        <span className={`${colorForIcon(hospital[item])}`}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={icons[item]} fill="currentColor" fillRule="nonzero" />
          </svg>
        </span>
        <div className="font-semibold">{iconText[item]}</div>
      </div>
    );
  });
};

const HospitalListCard = (hospital) => {
  return (
    <div>
      <div className="overflow-hidden rounded-2xl shadow-lg h-full">
        <div className="grid md:grid-cols-3 bg-primary-500">
          <div className="col-span-1 text-white md:pl-6 text-center md:text-left">
            <div className="font-semibold text-lg md:text-2xl mb-2 mt-4 pr-2">
              {hospital.hospital_name}
            </div>
            <div className="font-semibold text-base mb-2 mt-4 pr-2">
              {hospital.district} Dt.
            </div>
            <div className="mt-4 flex justify-center md:justify-start">
              <img
                className="object-cover shadow-lg h-16 w-16 rounded-full"
                onError={(e) => (e.target.src = DEFAULT_AVATAR)}
                src={hospital.collector_photo || DEFAULT_AVATAR}
                alt={hospital.collector_name}
              ></img>
            </div>
            <div className="text-md leading-6 font-medium space-y-1 my-2">
              <h3>{hospital.collector_name}</h3>
              <p className="font-light text-xs">District Collector</p>
            </div>
          </div>
          <div className="col-span-1 bg-white">
            <div className="space-y-1 sm:grid sm:grid-cols-2 sm:gap-x-1 sm:gap-y-1 sm:space-y-0 lg:grid-cols-2 lg:gap-x-1 px-1 py-0">
              {hospital.hospital_photos &&
                hospital.hospital_photos.map((photo, i) => {
                  return (
                    <div className="space-y-4" key={i}>
                      <div className="aspect-w-2 aspect-h-2">
                        <img className="object-cover" src={photo} alt="" />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          {hospital.donors && (
            <div className="col-span-1 text-white">
              <h2 className="text-center font-semibold text-xl md:text-3xl mb-2 mt-4">
                {hospital.donors.length > 1 ? "Donors" : "Donor"}
              </h2>
              <div className="mt-4">
                {hospital.donors.map((donor, i) => {
                  return (
                    <div key={i} className="py-2 px-2">
                      <div className="mx-auto w-1/3">
                        <div className="aspect-w-1 aspect-h-1">
                          <img
                            className="object-cover shadow-lg rounded-full"
                            onError={(e) => (e.target.src = DEFAULT_AVATAR)}
                            src={donor.image || DEFAULT_AVATAR}
                            alt={donor.name}
                          />
                        </div>
                      </div>
                      <div className="text-lg leading-6 font-medium space-y-1 mt-4 text-center">
                        <h3> {donor.name}</h3>
                        <p className="text-sm font-light">{donor.location}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div className="border p-2 bg-primary-100 flex justify-between">
          <div className="font-semibold text-md">Hospital Status Details</div>
          <div className="flex space-x-3">
            <div className="flex items-center text-red-500 font-semibold text-sm">
              <div className="h-3 w-3 rounded-full bg-red-500 mr-1 "></div>
              Pending
            </div>
            <div className="flex items-center text-yellow-500 font-semibold text-sm">
              <div className="h-3 w-3 rounded-full bg-yellow-500 mr-1 "></div>
              In Progress
            </div>
            <div className="flex items-center text-green-500 font-semibold text-sm">
              <div className="h-3 w-3 rounded-full bg-green-500 mr-1 "></div>
              Completed
            </div>
          </div>
        </div>
        <div className="px-4">
          <div className="grid md:grid-cols-3 uppercase mt-2 font-semibold text-gray-600">
            <div>Site</div>
            <div>Equipment</div>
            <div>Technology</div>
          </div>
          <div className="grid md:grid-cols-3">
            <div>
              {mapStatuses(
                [
                  "site_space",
                  "site_electrical",
                  "site_internet",
                  "site_oxygen",
                ],
                hospital
              )}
            </div>
            <div>
              {mapStatuses(
                [
                  "equipment_ordered",
                  "equipment_delivered",
                  "equipment_installed",
                  "equipment_staff_trained",
                ],
                hospital
              )}
            </div>
            <div>
              {mapStatuses(
                [
                  "tech_trained",
                  "tech_hospital_registration",
                  "tech_patient_management",
                  "tech_tele_icu_live",
                ],
                hospital
              )}
            </div>
          </div>
        </div>
        <div className="bg-primary-100">
          <div className="px-6 py-4">
            <span>Go Live on:</span>
            <span className="text-xl ml-2 font-bold">
              {hospital.launch_date || "TBD"}
            </span>
          </div>
        </div>
      </div>
      <div className="text-lg mt-6">
        <p className="text-gray-500 text-justify">{hospital.summary}</p>
      </div>
    </div>
  );
};

export default HospitalListCard;
