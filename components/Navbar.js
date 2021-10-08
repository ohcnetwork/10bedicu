import React from "react";
import { useState, useEffect } from "react";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = navbarOpen ? "hidden" : "auto";
  }, [navbarOpen]);
  const navMapMobile = [
    {
      title: "Home",
      href: "https://10bedicu.org/",
    },
    {
      title: "July24-Conf",
      href: "https://10bedicu.org/july24-conf",
    },
    {
      title: "Program States ",
      sublinks: [
        { title: "Telangana", href: "https://10bedicu.org/telangana" },
        { title: "Karnataka", href: "https://10bedicu.org/karnataka" },
        {
          title: "Andhra Pradesh",
          href: "https://10bedicu.org/andhra-pradesh",
        },
        { title: "Manipur", href: "https://10bedicu.org/manipur" },
        { title: "Meghalaya", href: "https://10bedicu.org/meghalaya" },
        { title: "Nagaland", href: "https://10bedicu.org/nagaland" },
        { title: "Sikkim", href: "https://10bedicu.org/sikkim" },
      ],
    },
    {
      title: "Tech Platform",
      href: "https://10bedicu.org/tech-platform",
    },
    {
      title: "Media",
      href: "https://10bedicu.org/#",
    },
    {
      title: "Donate Now",
      href: "https://10bedicu.org/donate-now",
    },
    {
      title: "Deployment",
      href: "https://10bedicu.org/deployment",
    },
    {
      title: "Our Team",
      href: "https://10bedicu.org/our-team",
    },
    {
      title: "Training",
      sublinks: [
        {
          title: "Video Courses",
          href: "https://10bedicu.org/video-courses",
        },
        {
          title: "OnePager ICU Topics",
          href: "https://10bedicu.org/onepager-icu-topics",
        },
        {
          title: "FAQs",
          href: "https://10bedicu.org/faqs",
        },
      ],
    },
  ];
  const navMap = [
    {
      title: "Home",
      href: "https://10bedicu.org/",
    },
    {
      title: "July24-Conf",
      href: "https://10bedicu.org/july24-conf",
    },
    {
      title: "Program States ",
      sublinks: [
        { title: "Telangana", href: "https://10bedicu.org/telangana" },
        { title: "Karnataka", href: "https://10bedicu.org/karnataka" },
        {
          title: "Andhra Pradesh",
          href: "https://10bedicu.org/andhra-pradesh",
        },
        { title: "Manipur", href: "https://10bedicu.org/manipur" },
        { title: "Meghalaya", href: "https://10bedicu.org/meghalaya" },
        { title: "Nagaland", href: "https://10bedicu.org/nagaland" },
        { title: "Sikkim", href: "https://10bedicu.org/sikkim" },
      ],
    },
    {
      title: "Tech Platform",
      href: "https://10bedicu.org/tech-platform",
    },
    {
      title: "Media",
      href: "https://10bedicu.org/#",
    },
    {
      title: "Donate Now",
      href: "https://10bedicu.org/donate-now",
    },
    {
      title: "Deployment",
      href: "https://10bedicu.org/deployment",
    },
    {
      title: "More",
      sublinks: [
        {
          title: "Our Team",
          href: "https://10bedicu.org/our-team",
        },
        {
          title: "Training",
          href: "",
        },
        {
          title: "Video Courses",
          href: "https://10bedicu.org/video-courses",
          padded: true,
        },
        {
          title: "OnePager ICU Topics",
          href: "https://10bedicu.org/onepager-icu-topics",
          padded: true,
        },
        {
          title: "FAQs",
          href: "https://10bedicu.org/faqs",
          padded: true,
        },
      ],
    },
  ];
  const NavLink = (props) => {
    return (
      <li>
        <a
          className="text-xl border-b-2 border-transparent hover:border-white"
          href={props.href}
        >
          {props.title}
        </a>
      </li>
    );
  };
  const NavLinkMobile = (props) => {
    return (
      <li>
        <a className="mx-6 text-xl py-3 block" href={props.href}>
          {props.title}
        </a>
      </li>
    );
  };

  const NavDropdownLink = (props) => {
    const [open, setOpen] = useState(false);
    return (
      <li className="h-full flex items-center relative">
        <div
          className="cursor-pointer text-xl border-b-2 border-transparent hover:border-white"
          href="#"
          onClick={(e) => {
            setOpen(!open);
          }}
        >
          {props.title}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 inline transition ${
              open ? "transform rotate-180" : ""
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
          className={`absolute left-0 top-full bg-[#008390] shadow-lg ${
            open ? "block" : "hidden"
          }`}
        >
          <ul>
            {props.sublinks.map((sublink) => (
              <li key={sublink.href} className="text-left w-60">
                <a
                  className={`text-xl py-2 px-4 hover:bg-[#005b64] block ${
                    sublink.padded ? "pl-8" : ""
                  }`}
                  href={sublink.href}
                >
                  {sublink.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </li>
    );
  };

  const NavDropdownLinkMobile = (props) => {
    const [open, setOpen] = useState(false);
    return (
      <li className="h-full items-center">
        <div
          className="mx-6 text-xl py-3 flex justify-between"
          href="#"
          onClick={(e) => {
            setOpen(!open);
          }}
        >
          {props.title}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 inline transition ${
              open ? "transform rotate-180" : ""
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
        <div className={open ? "block" : "hidden"}>
          <ul>
            {props.sublinks.map((sublink) => (
              <li className="w-full" key={sublink.href}>
                <a className="text-xl py-2 pl-14 block" href={sublink.href}>
                  {sublink.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </li>
    );
  };
  return (
    <>
      <nav className="text-center w-full bg-[#008390] px-5">
        <div className="max-w-screen-xl mx-auto flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white xl:hidden absolute"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={(e) => {
              setNavbarOpen(true);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <a href="/" className="block mx-auto lg:m-0">
            <img src="/10bedlogo.png" className="h-20 m-3" />
          </a>
          <ul className=" justify-end gap-9 items-center text-white lg:flex hidden flex-1">
            {navMap.map((navItem) => {
              return "href" in navItem ? (
                <NavLink
                  title={navItem.title}
                  href={navItem.href}
                  key={navItem.href}
                />
              ) : (
                <NavDropdownLink
                  title={navItem.title}
                  sublinks={navItem.sublinks}
                  key={navItem.href}
                />
              );
            })}
          </ul>
        </div>
      </nav>
      <div
        className={`bg-black bg-opacity-90 text-white absolute inset-0 lg:transform  transition max-h-screen flex flex-col ${
          navbarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 ml-auto m-5 mb-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={(e) => {
            setNavbarOpen(false);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <ul className="text-white divide-solid divide-gray-700 divide-y-2 flex flex-col items-stretch overflow-y-auto">
          {navMapMobile.map((navItem) => {
            return "href" in navItem ? (
              <NavLinkMobile
                title={navItem.title}
                href={navItem.href}
                key={navItem.href}
              />
            ) : (
              <NavDropdownLinkMobile
                key={navItem.href}
                title={navItem.title}
                sublinks={navItem.sublinks}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
