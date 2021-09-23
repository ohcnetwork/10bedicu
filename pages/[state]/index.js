import React from "react";
import Head from "next/head";
import {
  statesStaticPaths,
  findState,
  findDonor,
  hospitalsInState,
  pmusInState,
  splitText,
} from "/lib/utils";

const StatePage = ({ state }) => {

  const hospitals = hospitalsInState(state.name);
  const pmus = pmusInState(state.name)

  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>{state.name} | 10 Bed ICU </title>
      </Head>
      <div className="sticky top-0 bg-white w-full max-w-5xl mx-auto z-40 p-2">
        <a href="/">
          <img src="/10bedlogo.png" className="h-10 md:h-12" />
        </a>
      </div>
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
            <div className="text-lg max-w-3xl mx-auto mt-4">
              <p className="text-gray-500">{state.state_summary}</p>
            </div>
          </div>

          <div className="mt-10 text-center text-gray-700">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Project Management Unit
            </h2>
          </div>
          <div className="text-lg max-w-5xl mx-auto mt-6">
            <p className="text-gray-500 text-justify">{state.pmu_summary}</p>
          </div>
        </div>

        <div className="bg-white mt-10">
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
          >
            {pmusInState(state.name).map((pmu, i) => (
              <li key={i}>
                <div className="space-y-4">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                    src={pmu.image}
                    alt={pmu.name}
                  />
                  <div className="text-lg leading-6 font-medium space-y-1 text-center">
                    <h3>{pmu.name}</h3>
                  </div>
                  <div className="text-lg text-center">
                    <p className="text-gray-500">{pmu.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 text-center text-gray-700 border-b-2 pb-2">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            10 Bed ICU's in {state.name}
          </h2>
        </div>

        <div className="flex flex-row flex-wrap mx-auto max-w-5xl justify-between mt-4">
          {hospitals.map((hospital, i) => {
            return (
              <div className=" p-4 w-full" key={i}>
                <div className="overflow-hidden rounded-3xl shadow-lg h-full">
                  <div className="px-6 py-4">
                    <div className="font-bold text-3xl md:text-5xl mb-2  text-gray-700">
                      {hospital.district} District
                    </div>
                    <div className="font-bold text-xl md:text-3xl mb-2  text-gray-500">
                      {hospital.hospital_name}
                    </div>
                    <div className="flex flex-col md:flex-row w-full mt-6 space-y-6">
                      <div className="flex items-center justify-center flex-col md:w-1/3">
                        <img
                          className="object-cover shadow-lg  h-40 w-40 rounded-full"
                          src={hospital.collector_photo}
                          alt={hospital.collector_name}
                        ></img>
                        <div className="text-lg leading-6 font-medium space-y-1 mt-4 text-center">
                          <h3>{hospital.collector_name}</h3>
                          <p className="text-indigo-600">District Collector</p>
                        </div>
                      </div>
                      <div className="text-lg md:w-2/3">
                        <p className="text-gray-500">{hospital.summary}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 sm:space-y-0 lg:grid-cols-2 lg:gap-x-4 px-6 py-4">
                    {splitText(hospital.hospital_photos).map((photo, index) => {
                      return (
                        <div className="space-y-4" key={index}>
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
                      {splitText(hospital.donors).length > 1
                        ? "Donors"
                        : "Donor"}
                    </h2>
                    <div className="mt-4 flex flex-col md:flex-row item-center justify-center">
                      {splitText(hospital.donors).map((donorSlug, index) => {
                        const donor = findDonor(donorSlug);
                        return (
                          <div
                            key={index}
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
                              <p className="text-indigo-600">
                                {donor.location}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="bg-gray-100">
                    <div className="px-6 py-4">
                      <span className="text-xl font-bold">
                        Go Live on: {hospital.launch_date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
      state: findState(params.state),
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