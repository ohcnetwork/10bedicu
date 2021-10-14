import HomeStatesList from "@components/HomeStatesList";
import Navbar from "@components/Navbar";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pb-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 relative">
        <Navbar />
        <HomeStatesList />
      </main>
    </div>
  );
};

export default HomePage;
