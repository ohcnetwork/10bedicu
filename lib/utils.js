import meta from "/data/meta.json";
import hospitals from "/data/hospitals.json";

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

export const hospitalsInState = (state) => {
  return hospitals.filter((hospital) => hospital.state == state);
};
