/* eslint-disable react/no-unescaped-entities */
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Container from "./Container";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      id="about"
      className="bg-gray-700 text-white  min-h-screen flex flex-col justify-center items-center  py-5"
    >
      <Container>
        <div data-aos="fade-up" data-aos-duration="2000">
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
                    Nationality :{" "}
                    <span className="font-medium"> Bangladeshi</span>
                  </h3>
                  <h3 className="text-xl">
                    Language :{" "}
                    <span className="font-medium">Bangla, English</span>
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
                </div>
              </div>
            </div>
            <div className="flex-1 lg:ml-20">
              <div className="mt-10 flex gap-3 flex-col md:flex-row">
                <h1 className="text-3xl font-medium border-2 py-4 px-6 mx-1 border-sky-400 shadow-sm shadow-sky-400 flex-1">
                  1+ Year
                  <br />{" "}
                  <span className="pl-24 text-sky-500">
                    Learning Experience
                  </span>
                </h1>
                <h1 className="text-3xl font-medium border-2 py-4 px-6  mx-1 border-sky-400 shadow-sm shadow-sky-400 flex-1 ">
                  10+ <br /> <span className="pl-4 text-sky-500">Projects</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          className=" mt-10 flex flex-col lg:flex-row gap-5"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="flex-1">
            <h1 className="text-2xl uppercase font-medium mb-3">
              My <span className="text-sky-400">Goal :</span>{" "}
            </h1>
            <p className="text-lg">
              {" "}
              With a passion for React.js and a drive to continually expand my
              skill set, I have honed my expertise in front-end development over
              the past year. Now, my ambition is to seamlessly transition into a
              full-stack role, contributing to larger projects and crafting
              captivating UIs while also mastering the intricacies of back-end
              development. Beyond that, I aim to pivot into the dynamic field of
              DevOps, where I can optimize processes and enhance project
              efficiency through automation and collaboration.
            </p>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl uppercase font-medium mb-3">
              Why you <span className="text-sky-400">Hire Me :</span>{" "}
            </h1>
            <p className="text-lg">
              {" "}
              Hire me for my dedication to continuous learning and growth,
              evident in my self-driven journey to master various web
              development technologies. I thrive in collaborative environments,
              eager to contribute my creativity and expertise to team projects.
              With a strong commitment to meeting deadlines and managing time
              effectively, I ensure efficient project delivery. I'm passionate
              about expanding my skill set and embracing new technologies,
              making me an invaluable asset to any team striving for excellence.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
