/* eslint-disable react/no-unescaped-entities */
import my_picture from "../src/assets/image/picture.png";
import { TiSocialFacebook } from "react-icons/ti";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Container from "./Container";

const Banner = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-gray-800 text-white min-h-screen px-2">
      <Container>
        <div className=" pt-16 md:pt-40  flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="space-y-3 flex-1 mb-2">
            <h3 className="text-2xl font-medium " data-aos="zoom-in-left">
              Hi, It's Me
            </h3>
            <h1
              className="text-3xl md:text-4xl font-medium"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              Jafar Uddin Dipu
            </h1>
            <h3
              className="text-xl md:text-2xl font-medium flex gap-2"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              I'm a{" "}
              <span className="text-sky-400">
                {" "}
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    strings: [
                      "Frontend Developer.",
                      "React JS Developer.",
                      "Node JS Developer.",
                      "MERN Stack Developer.",
                    ],
                  }}
                ></Typewriter>{" "}
              </span>
            </h3>
            <p className="max-w-xl">
              Passionate MERN stack web developer me, dedicated to becoming a
              proficient software engineer. I love using MongoDB, Express.js,
              React, and Node.js to build cool websites. Now, I want to learn
              more about all aspects of software development so I can create
              even better and more advanced software. I'm ready to keep learning
              and growing to become the best software engineer I can be.
            </p>
            <div className="pt-5 flex gap-3">
              <a
                href="https://www.facebook.com/mdjafor.uddin.9674"
                target="blank"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                <TiSocialFacebook className="text-3xl text-sky-400 border-2 border-sky-400 rounded-full shadow-sm shadow-sky-400" />
              </a>
              <a
                href="https://www.instagram.com/dipuju/"
                target="blank"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="700"
              >
                <FaInstagram className="text-3xl text-sky-400 border-2 border-sky-400 rounded-full shadow-sm shadow-sky-400 p-1" />
              </a>
              <a
                href="https://www.linkedin.com/in/jafar-uddin-dipu-51b9082a7/"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="900"
              >
                <FaLinkedin className="text-3xl text-sky-400 border-2 border-sky-400 rounded-full shadow-sm shadow-sky-400 p-1" />
              </a>
              <a
                href="https://github.com/dipujafar"
                target="blank"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="1100"
              >
                <FaGithub className="text-3xl text-sky-400 border-2 border-sky-400 rounded-full shadow-sm shadow-sky-400 p-1" />
              </a>
            </div>
            <a
              href="resume.pdf"
              download
              className="btn btn-outline btn-info uppercase"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              Download Resume
            </a>
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="flex-1"
          >
            <div className="flex justify-center">
              <img
                src={my_picture}
                alt=""
                className="border rounded-full bg-gray-700 border-sky-300 shadow-lg shadow-blue-400 md:w-3/4"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
