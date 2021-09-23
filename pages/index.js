import Head from "next/head";
import meta from "/data/meta.json";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://10bedicu.org/">
            10 Bed ICU
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Creating ICUS in rural govt hospitals before wave3
        </p>

        <div className="flex flex-wrap items-center justify-between max-w-4xl mt-6 sm:w-full">
          {meta.map((state) => {
            return (
              <a
                href={`${state.path}`}
                className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
              >
                <h3 className="text-2xl font-bold">{state.name} &rarr;</h3>
                <p className="mt-4 text-xl">{state.hospitals} hospitals</p>
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
