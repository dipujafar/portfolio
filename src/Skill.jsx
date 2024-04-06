import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import {
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Skill = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div id="skill" className="bg-gray-600 text-white py-16 min-h-screen pt-10">
      <div
        className="max-w-7xl mx-auto"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1 className="text-center text-4xl uppercase font-medium">
          my <span className="text-sky-400">skill </span>
        </h1>
        <div className="mt-5 grid grid-cols-2 lg:grid-cols-3 gap-3 px-2">
          <p className="border border-sky-400  shadow-sm shadow-sky-400 p-2 text-3xl flex justify-center items-center gap-2">
            <FaHtml5 className="text-orange-400" />
            HTML
          </p>
          <p className="border border-sky-400 shadow-sm shadow-sky-400 p-2 text-3xl flex justify-center items-center gap-2">
            <FaCss3Alt className="text-blue-400" />
            CSS
          </p>
          <p className="border border-sky-400 shadow-sm shadow-sky-400 p-2 text-3xl flex justify-center items-center gap-2">
            <SiTailwindcss className="text-blue-500" />
            Tailwind
          </p>
          <p className="border border-sky-400 shadow-sm shadow-sky-400 p-2 text-3xl flex justify-center items-center gap-2">
            <SiJavascript className="text-yellow-400" />
            Javascript
          </p>
          <p className="border border-sky-400 shadow-sm shadow-sky-400 p-2 text-3xl flex justify-center items-center gap-2">
            <FaReact className="text-blue-500" />
            React
          </p>
          <p className="border border-sky-400 shadow-sm shadow-sky-400 p-2 text-3xl flex justify-center items-center gap-2">
            <FaNodeJs className="text-green-500" />
            Node JS
          </p>
          <p className="border border-sky-400 shadow-sm shadow-sky-400 p-2 text-3xl flex justify-center items-center gap-2">
            <SiMongodb className="text-green-500" />
            MongoDB
          </p>
          <p className="border border-sky-400 shadow-sm shadow-sky-400 p-2 text-3xl flex justify-center items-center gap-2">
            <TbBrandNextjs className="text-black" />
            Next Js
          </p>
          <p className="border border-sky-400 shadow-sm shadow-sky-400 p-2 text-3xl flex justify-center items-center gap-2">
            <SiFirebase className="text-orange-400" />
            Firebase
          </p>
          <p className="border border-sky-400 shadow-sm shadow-sky-400 p-2 text-3xl flex justify-center items-center gap-2">
            <FaPython className="text-black" />
            Python (Basic)
          </p>
          <p className="border border-sky-400 shadow-sm shadow-sky-400 p-2 text-3xl flex justify-center items-center gap-2">
            <FaJava className="text-black" />
            Java (Basic)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
