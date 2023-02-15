import React, { useEffect } from "react";
import Head from "next/head";
import {
  statesStaticPaths,
  findState,
  hospitalsInState,
  pmusInState,
} from "@lib/utils";
import PMUListCard from "@components/States/PMUListCard";
import HospitalListCard from "@components/States/HospitalListCard";
import Navbar from "@components/Navbar";
import HospitalStatusMap from "@components/States/HospitalStatusMap";
import Header from "@components/common/Heading";

const StatePage = ({ state, hospitals, pmus }) => {
  return (
    <div className="flex flex-col min-h-screen pb-2">
      <Head>
        <title>{state.name} | 10 Bed ICU </title>
      </Head>
      <Navbar />
      <main className="mx-auto max-w-5xl flex flex-col items-center justify-center w-full flex-1">
        <div className="w-full">
          <div className="p-3 text-center">
            <div className="flex justify-center mt-6">
              <img
                className="h-40"
                alt={state.name}
                src={state.state_logo}
              ></img>
            </div>
            <div className="font-bold text-3xl md:text-5xl mb-2 text-gray-700 mt-4">
              {state.name}
            </div>
            <div className="text-lg max-w-3xl mx-auto mt-4 text-justify md:text-center">
              <p className="text-gray-500 ">{state.state_summary}</p>
            </div>
          </div>

          {state.youtube_links && (
            <div className="px-5 w-full flex flex-col items-center">
              <div className="mt-10 mb-5 text-center text-gray-700">
                <Header id="field_report" title="Field Report" />
              </div>
              {
                (state.youtube_links.map((link) => (
                  <iframe
                    key={link}
                    className="w-full md:w-2/3 h-60 md:h-96 rounded-md my-3"
                    src={`https://www.youtube.com/embed/${link}`}
                    title={`${state.name} - Field Report`}
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )))
              }
            </div>
          )}

          {state.state_donor_map && (
            <img alt={state.name} src={state.state_donor_map}></img>
          )}

          <Header id="hospital_status" title="Hospital Status" />
          <div className="text-lg max-w-5xl mx-auto mt-6 px-2">
            <HospitalStatusMap state={state} hospitals={hospitals} />
          </div>

          <Header id="pmu" title="Project Management Unit" />
          <div className="text-lg max-w-5xl mx-auto mt-6 px-2">
            <p className="text-gray-500 text-justify">{state.pmu_summary}</p>
          </div>

          <div className="bg-white mt-10 p-2">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
            >
              {pmus.map((pmu, i) => (
                <li key={i}>
                  <PMUListCard {...pmu} />
                </li>
              ))}
            </ul>
          </div>

          <Header id="icus" title={`10 Bed ICU's in ${state.name}`} />
          <div className="flex flex-row flex-wrap mx-auto max-w-5xl justify-between mt-4">
            {hospitals.map((hospital, i) => (
              <div className="p-4 w-full" key={i}>
                <HospitalListCard {...hospital} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const state = findState(params.state);
  const hospitals = hospitalsInState(state.name);
  const pmus = pmusInState(state.name);

  return {
    props: {
      state: state,
      hospitals: hospitals,
      pmus: pmus,
    },
  };
}

export function getProps(stateSlug) {
  const state = findState(stateSlug);
  const hospitals = hospitalsInState(state.name);
  const pmus = pmusInState(state.name);

  return {
    props: {
      state: state,
      hospitals: hospitals,
      pmus: pmus,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: statesStaticPaths(),
    fallback: false,
  };
}

export default StatePage;
