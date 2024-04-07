import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      id="about"
      className="bg-gray-700 text-white  min-h-screen flex flex-col justify-center items-center  py-5"
     
    >
      <div className="max-w-7xl mx-auto"  data-aos="fade-up"
      data-aos-duration="2000">
        <h1 className="text-4xl uppercase text-center  font-medium">
          About <span className="text-sky-400">Me</span>
        </h1>
        <div className="flex items-center flex-col lg:flex-row gap-3">
          <div className="flex-1">
            <h1 className="text-2xl uppercase font-medium p-2 md:p-0 mt-2">
              Personal Info
            </h1>
            <div className="mt-3 flex flex-col md:flex-row p-2 md:p-0 md:gap-16 gap-2">
              <div className="space-y-1">
                <h3 className="text-xl">
                  Name : <span className="font-medium">Jafar Uddin Dipu</span>
                </h3>
                <h3 className="text-xl">
                  Age : <span className="font-medium"> 22 Years</span>
                </h3>
                <h3 className="text-xl">
                  Nationality :{" "}
                  <span className="font-medium"> Bangladeshi</span>
                </h3>
              </div>
              <div className="space-y-1">
                <h3 className="text-xl">
                  Address :{" "}
                  <span className="font-medium">Feni, Bangladesh</span>
                </h3>
                <h3 className="text-xl">
                  Phone : <span className="font-medium">01857176432</span>
                </h3>
                <h3 className="text-xl">
                  Email :{" "}
                  <span className="font-medium">dipujafarmr@gmail.com</span>
                </h3>
                <h3 className="text-xl">
                  Language :{" "}
                  <span className="font-medium">Bangla, English</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="flex-1 lg:ml-20">
            <div className="mt-10 flex gap-3 flex-col md:flex-row">
              <h1 className="text-3xl font-medium border-2 py-4 px-6 border-sky-400 shadow-sm shadow-sky-400 flex-1">
                1+ Year
                <br /> <span className="pl-24 text-sky-500">Experience</span>
              </h1>
              <h1 className="text-3xl font-medium border-2 py-4 px-6 border-sky-400 shadow-sm shadow-sky-400 flex-1 ">
                10+ <br /> <span className="pl-4 text-sky-500">Projects</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
