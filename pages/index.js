import HomeStatesList from "@components/HomeStatesList";
import { useState } from "react";

const HomePage = () => {
    const [navStatesOpen, setNavStatesOpen] = useState(false);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen pb-2">
            <main className="flex flex-col items-center justify-center w-full flex-1">
                <div className="text-center w-full bg-[#008390]">
                    <div className="max-w-screen-xl mx-auto flex justify-between">
                        <a href="/">
                            <img src="/10bedlogo.png" className="h-20 m-3" />
                        </a>
                        <ul className="flex justify-center items-center text-white">
                            <li>
                                <a
                                    className="mx-6 text-xl border-b-2 border-transparent hover:border-white"
                                    href="/"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    className="mx-6 text-xl border-b-2 border-transparent hover:border-white"
                                    href="https://10bedicu.org/july24-conf"
                                >
                                    July24-Conf
                                </a>
                            </li>
                            <li className="h-full flex items-center relative">
                                <div
                                    className="mx-6 text-xl border-b-2 border-transparent hover:border-white"
                                    href="#"
                                    onClick={(e) => {
                                        setNavStatesOpen(!navStatesOpen);
                                    }}
                                >
                                    Program States{" "}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-6 w-6 inline transition ${
                                            navStatesOpen
                                                ? "transform rotate-180"
                                                : ""
                                        }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                                <div
                                    className={`absolute inset-x-0 top-full bg-[#008390] shadow-lg ${
                                        navStatesOpen ? "block" : "hidden"
                                    }`}
                                >
                                    <ul>
                                        <li className="w-full">
                                            <a
                                                className="text-xl py-2 hover:bg-[#005b64] block"
                                                href="https://10bedicu.org/karnataka"
                                            >
                                                Telangana
                                            </a>
                                        </li>
                                        <li className="w-full">
                                            <a
                                                className="text-xl py-2 hover:bg-[#005b64] block"
                                                href="https://10bedicu.org/karnataka"
                                            >
                                                Karnataka
                                            </a>
                                        </li>
                                        <li className="w-full">
                                            <a
                                                className="text-xl py-2 hover:bg-[#005b64] block"
                                                href="https://10bedicu.org/andhra-pradesh"
                                            >
                                                Andhra Pradesh
                                            </a>
                                        </li>
                                        <li className="w-full">
                                            <a
                                                className="text-xl py-2 hover:bg-[#005b64] block"
                                                href="https://10bedicu.org/manipur"
                                            >
                                                Manipur
                                            </a>
                                        </li>
                                        <li className="w-full">
                                            <a
                                                className="text-xl py-2 hover:bg-[#005b64] block"
                                                href="https://10bedicu.org/meghalaya"
                                            >
                                                Meghalaya
                                            </a>
                                        </li>
                                        <li className="w-full">
                                            <a
                                                className="text-xl py-2 hover:bg-[#005b64] block"
                                                href="https://10bedicu.org/nagaland"
                                            >
                                                Nagaland
                                            </a>
                                        </li>
                                        <li className="w-full">
                                            <a
                                                className="text-xl py-2 hover:bg-[#005b64] block"
                                                href="https://10bedicu.org/sikkim"
                                            >
                                                Sikkim
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a
                                    className="mx-6 text-xl border-b-2 border-transparent hover:border-white"
                                    href="https://10bedicu.org/tech-platform"
                                >
                                    Tech Platform
                                </a>
                            </li>
                            <li>
                                <a
                                    className="mx-6 text-xl border-b-2 border-transparent hover:border-white"
                                    href="https://10bedicu.org/media"
                                >
                                    Media
                                </a>
                            </li>
                            <li>
                                <a
                                    className="mx-6 text-xl border-b-2 border-transparent hover:border-white"
                                    href="https://10bedicu.org/donate-now"
                                >
                                    Donate Now
                                </a>
                            </li>
                            <li>
                                <a
                                    className="mx-6 text-xl border-b-2 border-transparent hover:border-white"
                                    href="https://10bedicu.org/deployment"
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
