import meta from "/data/meta.json";

const HomeStatesList = () => {
  return (
    <div className="flex flex-row flex-wrap mx-auto max-w-5xl justify-between mt-4">
      {meta.map((state) => {
        return (
          <a
            key={state.path}
            href={`/${state.path}`}
            className="max-w-lg p-4 w-full"
          >
            <div className="overflow-hidden rounded-lg shadow-lg h-full">
              <div className="flex justify-center mt-6">
                <img className="h-40" alt={state.name} src={state.state_logo} />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2 text-center">
                  {state.name}
                </div>
                <p className="text-gray-700 text-center text-base text-justify">
                  {state.state_summary}
                </p>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default HomeStatesList;
