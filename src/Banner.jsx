import my_picture from '../src/assets/image/picture.png'
import { TiSocialFacebook } from "react-icons/ti";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto pt-20 pb-5 flex flex-col md:flex-row justify-center items-center">
            <div className="space-y-2 md:w-1/2 mb-2">
                <h3 className="text-2xl font-medium ">Hi, It's Me</h3>
                <h1 className="text-4xl font-medium">Jafar Uddin Dipu</h1>
                <h3 className="text-2xl font-medium">I'm a <span className="text-sky-400"> Web Developer </span></h3>
                <div className='pt-5 flex gap-3'>
                    <a href="https://www.facebook.com/mdjafor.uddin.9674" target='blank'><TiSocialFacebook className='text-3xl text-sky-400 border-2 border-sky-400 rounded-full shadow-sm shadow-sky-400' /></a>
                    <a href="https://www.instagram.com/dipuju/" target='blank'><FaInstagram className='text-3xl text-sky-400 border-2 border-sky-400 rounded-full shadow-sm shadow-sky-400 p-1' /></a>
                    <a href="#"><FaLinkedin className='text-3xl text-sky-400 border-2 border-sky-400 rounded-full shadow-sm shadow-sky-400 p-1'  /></a>
                    <a href="https://github.com/dipujafar" target='blank'><FaGithub className='text-3xl text-sky-400 border-2 border-sky-400 rounded-full shadow-sm shadow-sky-400 p-1' /></a>
                </div>
            </div>
            <div>
                <img src={my_picture} alt="" className='border rounded-full bg-gray-700 border-sky-300 shadow-lg shadow-blue-400' />
            </div>
            </div>
        </div>
    );
};

export default Banner;