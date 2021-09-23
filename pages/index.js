import HomeStatesList from "@components/HomeStatesList";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1">
        <div className="p-3 text-center">
          <img src="/10bedlogo.png" className="h-20" />
        </div>
        <HomeStatesList />
      </main>
    </div>
  );
}

export default HomePage;