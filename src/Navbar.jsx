import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Navbar = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const navLink = (
    <>
      <li className="hover:text-sky-300 text-xl mr-4">
        <a href="#">Home</a>
      </li>
      <li className="hover:text-sky-300 text-xl mr-4">
        <a href="#about">About</a>
      </li>
      <li className="hover:text-sky-300 text-xl mr-4">
        <a href="#skill">Skill</a>
      </li>
      <li className="hover:text-sky-300 text-xl mr-4">
        <a href="#education">Education</a>
      </li>
      <li className="hover:text-sky-300 text-xl mr-4">
        <a href="#project">My Project</a>
      </li>
    </>
  );
  return (
    <div className="bg-gray-800 text-white fixed  lg:w-full">
      <div className="navbar max-w-7xl mx-auto">
        <div
          className="navbar-start"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-gray-800 w-52"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-sky-400">JAFAR DIPU</a>
        </div>
        <div className="navbar-center hidden lg:flex"
        data-aos="fade-up"
        data-aos-duration="3000">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end" data-aos="fade-up"
     data-aos-duration="3000">
          <a
            href="https://drive.google.com/file/d/18hXGB2CHvQPqsTf29heUhRUzWkWaGfiN/view?usp=drive_link"
            className="btn btn-outline btn-sm btn-info hidden m"
            target="blank"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
