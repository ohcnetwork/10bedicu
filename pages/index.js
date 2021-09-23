import Head from "next/head";
import meta from "/data/meta.json";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>10 Bed ICU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1">
        <div className="p-3 text-center">
          <img src="/10bedlogo.png" className="h-20" />
          {/* <h1 className="text-xl md:text-6xl font-bold hidden">
            Welcome to{" "}
            <a className="text-blue-600" href="https://10bedicu.org/">
              10 Bed ICU
            </a>
          </h1>
          <p className="mt-3 md:text-2xl">
            Creating ICUS in rural govt hospitals before wave3
          </p> */}
        </div>
        <div className="flex flex-row flex-wrap mx-auto max-w-5xl justify-between mt-4">
          {meta.map((state) => {
            return (
              <a href={`${state.path}`} className="max-w-lg p-4 w-full">
                <div className="overflow-hidden rounded-lg shadow-lg h-full">
                  <div className="flex justify-center mt-6">
                    <img
                      class="h-40"
                      alt={state.name}
                      src={state.state_logo}
                    ></img>
                  </div>
                  <div class="px-6 py-4">
                    <div class="font-bold text-3xl mb-2 text-center">
                      {state.name}
                    </div>
                    <p class="text-gray-700 text-base">{state.state_summary}</p>
                  </div>
                </div>
              </a>
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
