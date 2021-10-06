import HomeStatesList from "@components/HomeStatesList";

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen pb-2">
            <main className="flex flex-col items-center justify-center w-full flex-1">
                <div className="text-center w-full bg-[#008390]">
                    <div className="max-w-screen-xl p-3 mx-auto flex justify-between">
                        <a href="/">
                            <img src="/10bedlogo.png" className="h-20" />
                        </a>
                        <ul className="flex justify-center items-center">
                            <li>
                                <a
                                    className="text-white mx-6 text-xl border-b-2 border-transparent hover:border-white"
                                    href="/"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-white mx-6 text-xl border-b-2 border-transparent hover:border-white"
                                    href="#"
                                >
                                    Program States
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-white mx-6 text-xl border-b-2 border-transparent hover:border-white"
                                    href="#"
                                >
                                    Tech Platform
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-white mx-6 text-xl border-b-2 border-transparent hover:border-white"
                                    href="#"
                                >
                                    Media
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-white mx-6 text-xl border-b-2 border-transparent hover:border-white"
                                    href="#"
                                >
                                    Donate Now
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-white mx-6 text-xl border-b-2 border-transparent hover:border-white"
                                    href="#"
                                >
                                    Deployment
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <HomeStatesList />
            </main>
        </div>
    );
};

export default HomePage;
