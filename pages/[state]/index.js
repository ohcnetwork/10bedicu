import React from "react";
import Head from "next/head";
import {
  parametreize,
  statesStaticPaths,
  humanize,
  hospitalsInState,
} from "/lib/utils";
import { useRouter } from "next/router";

export default function State({ state }) {
  const { query } = useRouter();
  const hospitals = hospitalsInState(state);
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>{humanize(state)} | 10 Bed ICU </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1">
        <div className="p-3 text-center">
          <img src="/10bedlogo.png" className="h-20" />
        </div>
        <div className="flex flex-row flex-wrap mx-auto max-w-5xl justify-between mt-4">
          {hospitals.map((hospital) => {
            return (
              <div className=" p-4 w-full">
                <div className="overflow-hidden rounded-3xl shadow-lg h-full">
                  <div class="px-6 py-4">
                    <div class="font-bold text-3xl md:text-5xl mb-2  text-gray-700">
                      {hospital.district} District
                    </div>
                    <div class="font-bold text-xl md:text-3xl mb-2  text-gray-500">
                      {hospital.hospital_name}
                    </div>
                    <div className="flex flex-col md:flex-row w-full mt-6 space-y-6">
                      <div className="flex items-center justify-center flex-col md:w-1/3">
                        <img
                          class="object-cover shadow-lg  h-40 w-40 rounded-full"
                          src={hospital.collector_photo}
                          alt={hospital.collector_name}
                        ></img>
                        <div class="text-lg leading-6 font-medium space-y-1 mt-4`">
                          <h3>{hospital.collector_name}</h3>
                          <p class="text-indigo-600">District Collector</p>
                        </div>
                      </div>
                      <div class="text-lg md:w-2/3">
                        <p class="text-gray-500">{hospital.summary}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 sm:space-y-0 lg:grid-cols-2 lg:gap-x-4 px-6 py-4">
                    {hospital.hospital_photos.split("\n").map((photo) => {
                      return (
                        <div class="space-y-4">
                          <div class="aspect-w-3 aspect-h-2">
                            <img
                              class="object-cover shadow-lg rounded-lg"
                              src={photo}
                              alt=""
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div class="mx-auto px-6 py-8">
                    <h2 class="text-center text-2xl font-bold ">Donors</h2>
                    <div class="flow-root mt-8 lg:mt-10">
                      <div class="-mt-4 -ml-8 flex flex-wrap justify-evenly lg:-ml-4">
                        <div class="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 justify-center lg:ml-4">
                          <img
                            class="h-12"
                            src="https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg"
                            alt="Tuple"
                          />
                        </div>
                        <div class="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 justify-center lg:ml-4">
                          <img
                            class="h-12"
                            src="https://tailwindui.com/img/logos/mirage-logo-indigo-300.svg"
                            alt="Mirage"
                          />
                        </div>
                      </div>
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

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="http://coronasafe.network/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img
            src="/logo-csn.png"
            alt="Coronasafe Network"
            className="h-8 ml-2"
          />
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
      state: parametreize(params.state),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: statesStaticPaths(),
    fallback: false,
  };
}
