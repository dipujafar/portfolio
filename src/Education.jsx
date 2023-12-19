import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div id="education" className="bg-gray-800 py-16 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl text-sky-400 text-center font-medium uppercase">
          Education
        </h1>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-10">
          <li>
            <div className="timeline-middle border p-2 rounded-full bg-sky-400">
              <FaGraduationCap className="text-xl"></FaGraduationCap>
            </div>
            <div
              className="timeline-start md:text-end mb-10 border p-2 lg:px-10 border-sky-400 rounded shadow-sm shadow-sky-400 bg-slate-700 text-white"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <time className="font-mono italic text-xl">2023</time>
              <div className="text-lg font-black">
                Diploma in Computer Engineering
              </div>
              Feni Ploytechnic Institute <br />
              Feni <br />
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle border p-2 rounded-full bg-sky-400">
              <FaGraduationCap className="text-xl"></FaGraduationCap>
            </div>
            <div
              className="timeline-end mb-10 border p-2 lg:px-10 border-sky-400 rounded shadow-sm shadow-sky-400 bg-slate-700 text-white"
              data-aos="fade-left"
            >
              <time className="font-mono italic">2019</time>
              <div className="text-lg font-black">
                Secondary School Certificate
              </div>
              Adarsha High School <br />K M Hat, Feni
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
