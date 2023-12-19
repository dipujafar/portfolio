import my_picture from "../src/assets/image/picture.png";
import { TiSocialFacebook } from "react-icons/ti";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  // useEffect(() => {
  //     Aos.init();
  //   }, []);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <div className="max-w-7xl mx-auto pt-16 md:pt-40 pb-5 flex flex-col md:flex-row justify-center items-center">
        <div className="space-y-3 md:w-1/2 mb-2">
          <h3 className="text-2xl font-medium " data-aos="zoom-in-left">
            Hi, It's Me
          </h3>
          <h1
            className="text-4xl font-medium"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Jafar Uddin Dipu
          </h1>
          <h3
            className="text-2xl font-medium"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            I'm a <span className="text-sky-400"> Web Developer </span>
          </h3>
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
              href="#"
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
        >
          <img
            src={my_picture}
            alt=""
            className="border rounded-full bg-gray-700 border-sky-300 shadow-lg shadow-blue-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
