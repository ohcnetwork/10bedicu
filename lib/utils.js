import meta from "/data/meta.json";
import hospitals from "/data/hospitals.json";
import pmu from "/data/pmu.json";
import donors from "/data/donors.json";

export const parametreize = (string) => {
  return string.replace(/\s/gu, "_").toLowerCase();
};

export const humanize = (str) => {
  return str
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
        state: state.path,
      },
    };
  });
};

export const findState = (stateSlug) => {
  return meta.find((state) => {
    return state.path === stateSlug;
  });
};

export const hospitalsInState = (state) => {
  return hospitals.filter((hospital) => hospital.state == state);
};

export const pmuInState = (state) => {
  return pmu.filter((p) => p.state == state);
};

export const findDonor = (donorSlug) => {
  return donors[donorSlug];
};

export const splitText = (text) => {
  return text.trim().split("\n");
};
