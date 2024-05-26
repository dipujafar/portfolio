import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Container from "./Container";
const Contract = () => {
  const form = useRef();
  const handleSendEmail = (e) => {
    e.preventDefault();
    const inputForm = e.target;

    emailjs
      .sendForm(
        import.meta.env.VITE_email_service_id,
        import.meta.env.VITE_email_template,
        form.current,
        import.meta.env.VITE_email_public_key
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success(
              "I find your information. I will contract with you very soon."
            );
            inputForm.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className="bg-gray-900 py-16 px-2 text-white">
      <h1 className="text-4xl text-center uppercase font-medium">
        Contract <span className="text-sky-400">Me</span>{" "}
      </h1>
      <Container>
        <div className=" mx-auto mt-16">
          <div className="flex flex-col lg:flex-row gap-10 ">
            <div className="flex-1">
              <form ref={form} onSubmit={handleSendEmail}>
                <div className="flex flex-col md:flex-row gap-3 mb-5">
                  <input
                    type="text"
                    name="from_name"
                    id=""
                    required
                    placeholder="Full Name"
                    className="bg-gray-700 p-3 rounded w-full"
                  />
                  <input
                    type="text"
                    name="email"
                    id=""
                    required
                    placeholder="Email Address"
                    className="bg-gray-700 p-3 rounded w-full"
                  />
                </div>
                <div className="flex flex-col md:flex-row  gap-3 mb-5">
                  <input
                    type="number"
                    name="phone"
                    id=""
                    required
                    placeholder="Phone Number"
                    className="bg-gray-700 p-3 rounded w-full"
                  />
                  <input
                    type="text"
                    name="subject"
                    id=""
                    required
                    placeholder="Email Subject"
                    className="bg-gray-700 p-3 rounded w-full"
                  />
                </div>
                <div className="mb-5">
                  <textarea
                    name="message"
                    rows="3"
                    required
                    className="bg-gray-700 p-3 rounded w-full"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <input
                  type="submit"
                  value="Send"
                  className="btn bg-sky-600 shadow-md shadow-sky-500"
                />
              </form>
            </div>
            <div className="flex-1 space-y-8 flex flex-col justify-center items-center">
              <h1 className="text-4xl font-medium">Jafar Uddin Dipu</h1>
              <p className="text-xl flex gap-3 ">
                <MdCall /> 01857176432
              </p>
              <p className="text-xl flex gap-3">
                <MdEmail /> dipujafarmr@gmail
              </p>
              <a
                href="https://www.linkedin.com/in/jafar-uddin-dipu-51b9082a7/"
                className="text-xl flex gap-3 "
              >
                <FaLinkedin />
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contract;
