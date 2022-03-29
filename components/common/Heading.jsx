import { HiOutlineLink } from "react-icons/hi";

const Header = ({ id, title }) => {
  return (
    <a
      href={`#${id}`}
      id={id}
      className="group cursor-pointer relative flex justify-center items-center py-10 text-center text-gray-700"
    >
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <span className="group-hover:block hidden absolute left-0">
        <HiOutlineLink className="md:w-8 md:h-8 h-6 w-6" />
      </span>
    </a>
  );
};

export default Header;
