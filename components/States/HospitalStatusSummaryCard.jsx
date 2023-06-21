import { colorForIcon } from "@lib/utils";
import icons from "/data/icons.json";
import { ICON_TEXT } from "@lib/constants";
import CircularProgress from "@components/common/CircularProgress";

const mapStatuses = (statuses, summary) => {
  return statuses.map((item, i) => {
    const progress = (summary[item] || 0) / summary.total_hospitals;

    const status =
      progress >= 0.75
        ? "completed"
        : progress >= 0.25
        ? "in_progress"
        : "pending";

    return (
      <div key={i} className="py-2 px-2 flex items-center space-x-2">
        <span className={`${colorForIcon(status)}`}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={icons[item]} fill="currentColor" fillRule="nonzero" />
          </svg>
        </span>
        <div className="font-semibold">{ICON_TEXT[item]}</div>
        <div className="flex flex-1 items-center justify-end gap-1.5">
          <span>
            {summary[item] || 0}/{summary.total_hospitals}
          </span>
          <span className={colorForIcon(status)}>
            <CircularProgress progress={progress} strokeWidth={4} size={24} />
          </span>
        </div>
      </div>
    );
  });
};

const SUMMARY_ATTRIBUTE_KEYS = [
  ["site_space", "site_electrical", "site_internet", "site_oxygen"],
  [
    "equipment_ordered",
    "equipment_delivered",
    "equipment_installed",
    "equipment_staff_trained",
  ],
  [
    "tech_trained",
    "tech_hospital_registration",
    "tech_patient_management",
    "tech_tele_icu_live",
  ],
];
const makeSummary = (hospitals) => {
  return hospitals.reduce(
    (acc, hospital) => {
      SUMMARY_ATTRIBUTE_KEYS.forEach((key) => {
        key.forEach((item) => {
          if (hospital[item] !== "completed") return;
          if (!acc[item]) acc[item] = 0;
          acc[item] += 1;
        });
      });
      return acc;
    },
    {
      total_hospitals: hospitals.length,
    }
  );
};

const HospitalStatusSummaryCard = (hospitals) => {
  const summary = makeSummary(Object.values(hospitals));

  return (
    <div>
      <div className="overflow-hidden rounded-2xl shadow-lg h-full">
        <div className=" bg-primary-500 py-2">
          <div className="text-white md:pl-6 text-center">
            <div className="font-semibold text-lg md:text-2xl">Summary</div>
          </div>
        </div>
        <div className="px-4">
          <div className="grid md:grid-cols-3 uppercase mt-2 font-semibold text-gray-600">
            <div>Site</div>
            <div>Equipment</div>
            <div>Technology</div>
          </div>
          <div className="grid md:grid-cols-3">
            <div className="pr-4">
              {mapStatuses(SUMMARY_ATTRIBUTE_KEYS[0], summary)}
            </div>
            <div className="pr-4">
              {mapStatuses(SUMMARY_ATTRIBUTE_KEYS[1], summary)}
            </div>
            <div>{mapStatuses(SUMMARY_ATTRIBUTE_KEYS[2], summary)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalStatusSummaryCard;
