import meta from "/data/meta.json";
import hospitals from "/data/hospitals.json";
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
  return hospitals.filter(
    (hospital) => parametreize(hospital.state) == parametreize(state)
  );
};

export const pmusInState = (state) => {
  return pmus.filter((pmu) => parametreize(pmu.state) === parametreize(state));
};
