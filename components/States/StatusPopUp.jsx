import { ICON_TEXT } from "@lib/constants";
import React from "react";
import { colorForIcon } from "@lib/utils";
import { FaCaretDown } from "react-icons/fa";
import icons from "/data/icons.json";

const categoryMap = [
  {
    category: "site",
    label: "SITE",
    fields: ["site_space", "site_electrical", "site_internet", "site_oxygen"],
  },

  {
    category: "equipment",
    label: "EQUIPMENT",
    fields: [
      "equipment_ordered",
      "equipment_delivered",
      "equipment_installed",
      "equipment_staff_trained",
    ],
  },
  {
    category: "technology",
    label: "TECHNOLOGY",
    fields: [
      "tech_trained",
      "tech_hospital_registration",
      "tech_patient_management",
      "tech_tele_icu_live",
    ],
  },
];

const MapStatuses = ({ statuses, hospital }) => {
  return statuses.map((item, i) => {
    return (
      <div key={i} className="my-2 flex items-center">
        <span className={`${colorForIcon(hospital[item])} mr-2 block`}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={icons[item]} fill="currentColor" fillRule="nonzero" />
          </svg>
        </span>
        <span className="text-xs">{ICON_TEXT[item]}</span>
      </div>
    );
  });
};

export const StatusPopUp = ({ show, hospital }) => {
  return (
    <div
      className={`bg-white rounded-xl z-50 shadow-lg absolute bottom-6 left-1/2 -translate-x-1/2 transition-all ${
        show
          ? "opacity-100  translate-y-0"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative p-4">
        <div className="grid md:grid-cols-3 uppercase w-96">
          {categoryMap.map(({ category, fields, label }, i) => (
            <div key={category}>
              <h1 className="text-gray-500 mb-4 font-semibold"> {label}</h1>
              <div>
                <MapStatuses hospital={hospital} statuses={fields} />
              </div>
            </div>
          ))}
        </div>
        <FaCaretDown className="text-2xl text-white absolute -bottom-4 left-1/2 -translate-x-1/2 scale-y-150" />
      </div>
    </div>
  );
};
