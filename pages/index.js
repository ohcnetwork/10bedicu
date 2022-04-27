import HomeStatesList from "@components/HomeStatesList";
import Navbar from "@components/Navbar";
import StatePage, { getProps } from "./[state]";

const HomePage = () => {
  // Check for environment variables
  console.log("status_state", process.env.NEXT_PUBLIC_STATUS_STATE);
  if (process.env.NEXT_PUBLIC_STATUS_STATE !== undefined) {
    console.log("status_state", process.env.NEXT_PUBLIC_STATUS_STATE);
    const stateProps = getProps(process.env.NEXT_PUBLIC_STATUS_STATE);
    console.log("Props", stateProps);
    return <StatePage {...stateProps.props} />;
  }
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
