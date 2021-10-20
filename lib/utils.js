import meta from "/data/meta.json";
import hospitals from "/data/hospitals.json";
import hospital_status from "/data/hospital_status.json";
import pmus from "/data/pmu.json";
import donors from "/data/donors.json";

export const parametreize = (word) => {
  return word.replace(/\s/gu, "_").toLowerCase();
};

export const humanize = (word) => {
  return word
    .replace(/^[\s_]+|[\s_]+$/g, "")
    .replace(/[_\s]+/g, " ")
    .replace(/^[a-z]/, function (m) {
      return m.toUpperCase();
    });
};

export const statesStaticPaths = () => {
  return meta.map((state) => {
    return {
      params: {
        state: parametreize(state.path),
      },
    };
  });
};

export const findState = (stateSlug) => {
  return meta.find((state) => {
    return parametreize(state.path) === parametreize(stateSlug);
  });
};

export const hospitalsInState = (state) => {
  const state_hospital_status = hospital_status.filter((hospital) => {
    return parametreize(hospital.state) === parametreize(state);
  });
  return hospitals
    .filter((hospital) => parametreize(hospital.state) == parametreize(state))
    .map((hospital) => {
      const hospital_status = state_hospital_status.find(
        (hospital_status) =>
          parametreize(hospital_status.hospital_name) ===
          parametreize(hospital.hospital_name)
      );
      return {
        ...hospital,
        ...hospital_status,
      };
    });
};

export const pmusInState = (state) => {
  return pmus.filter((pmu) => parametreize(pmu.state) === parametreize(state));
};

export const colorForIcon = (status) => {
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
