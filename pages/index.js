import meta from "/data/meta.json";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1">
        <div className="p-3 text-center">
          <img src="/10bedlogo.png" className="h-20" />
        </div>
        <div className="flex flex-row flex-wrap mx-auto max-w-5xl justify-between mt-4">
          {meta.map((state) => {
            return (
              <a
                key={state.path}
                href={`${state.path}`}
                className="max-w-lg p-4 w-full"
              >
                <div className="overflow-hidden rounded-lg shadow-lg h-full">
                  <div className="flex justify-center mt-6">
                    <img
                      className="h-40"
                      alt={state.name}
                      src={state.state_logo}
                    ></img>
                  </div>
                  <div className="px-6 py-4">
                    <div className="font-bold text-3xl mb-2 text-center">
                      {state.name}
                    </div>
                    <p className="text-gray-700 text-base">
                      {state.state_summary}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default HomePage;