import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Container from "./Container";

/* eslint-disable react/no-unescaped-entities */
const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div id="project" className="bg-gray-700 text-white">
      <Container>
        <div className="py-16 " data-aos="fade-up" data-aos-duration="2000">
          <h1 className="text-4xl text-center uppercase font-medium">
            Latest <span className="text-sky-400">Projects</span>{" "}
          </h1>

          <div className="grid lg:grid-cols-3 gap-5 mt-4 ">
            {/* Project 1 */}
            <div className="card card-compact  shadow-xl">
              <figure className="bg-[url(https://i.ibb.co/7YW2L6h/image-gal-02-RETOUCH.jpg)] bg-cover h-64">
                <div className="bg-slate-900 bg-opacity-50 p-2 w-full">
                  <h1 className="text-xl text-center">FarmEr</h1>

                  <p className="text-center">
                    Basically this is a web application platform for a Farmer or
                    a consumer. Where a sell his product and consumer will get
                    organic food direct farmer. <br />
                    <button
                      className="text-xl font-bold"
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                    >
                      See More
                    </button>
                    {/* modal */}
                    <dialog id="my_modal_1" className="modal">
                      <div className="modal-box bg-slate-700">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <a
                          target="blank"
                          href="https://chasa-vai.web.app/"
                          className="font-bold text-lg mr-2"
                        >
                          FarmEr
                        </a>
                        <a
                          target="blank"
                          href="https://chasa-vai.web.app/"
                          className="badge badge-primary"
                        >
                          Live
                        </a>

                        <p className="py-4 text-xl">
                          Basically this is a web application platform for a
                          Farmer or a consumer. Where a farmer will sell his
                          product directly a consumer and a farmer can be share
                          his problem or get IOT solution in agriculture. A
                          consumer will get organic food from direct a farmer.
                        </p>
                        <p className="text-lg">
                          <b>Key Feature :</b>
                        </p>
                        <p className="mb-2">
                          - A user can request for be a registered farmer and
                          when admin will approved this request he will find all
                          benefits.
                        </p>
                        <p className="mb-2">
                          - Implements secure user authorization and role base
                          access.
                        </p>
                        <p className="mb-2">
                          - Stripe payment method is implemented here.
                        </p>
                        <p className="mb-2">
                          - There are dashboards for 3 types of users Admin,
                          Farmer, Consumer.
                        </p>
                        <h1 className="text-lg mt-2">
                          <b>Technology : </b> <br />
                          JavaScript, React, Tailwind CSS, Node, Express,
                          MongoDB, Firebase (Authentication), JWT
                          (Authorization)
                        </h1>
                      </div>
                    </dialog>
                  </p>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">FarmEr</h2>
                <div className="flex gap-1">
                  <a
                    href="https://chasa-vai.web.app/"
                    target="blank"
                    className="badge badge-outline cursor-pointer text-sky-400"
                  >
                    Live Link
                  </a>
                  <a
                    href="https://github.com/dipujafar/Chasa-Vai"
                    target="blank"
                    className="badge badge-outline cursor-pointer text-sky-400"
                  >
                    Repo Link (Github)
                  </a>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="card card-compact  shadow-xl">
              <figure className="bg-[url(https://i.ibb.co/VLRf0xz/banner7.jpg)] bg-cover h-64">
                <div className="bg-slate-900 bg-opacity-50 p-2 w-full">
                  <h1 className="text-xl text-center">Knack</h1>
                  <p className="text-center">
                    Knack is a E-Learning website. Where a learner can developed
                    his skill and a teacher tech million of student via
                    internet. <br />
                    <button
                      className="text-xl font-bold"
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                    >
                      See More
                    </button>
                    {/* modal */}
                    <dialog id="my_modal_2" className="modal">
                      <div className="modal-box bg-slate-700">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <a
                          target="blank"
                          href="https://knack-up.web.app/"
                          className="font-bold text-lg mr-2"
                        >
                          Knack
                        </a>
                        <a
                          target="blank"
                          href="https://knack-up.web.app/"
                          className="badge badge-primary"
                        >
                          Live
                        </a>

                        <p className="py-4 text-xl">
                          Knack is a E-Learning website. Where a learner can
                          developed his skill and a teacher tech million of
                          student via internet.
                        </p>
                        <p className="text-lg">
                          <b>Key Feature :</b>
                        </p>
                        <p className="mb-2">
                          - Here in each course the teacher will add the
                          assignment and the students will submit it.
                        </p>
                        <p className="mb-2">
                          - Stripe payment method is implemented here.
                        </p>
                        <p className="mb-2">
                          - Implements secure user authorization and role base
                          access.
                        </p>
                        <p className="mb-2">
                          - There are dashboards for 3 types of users Admin,
                          Teacher, Student
                        </p>
                        <h1 className="text-lg mt-2">
                          <b>Technology : </b> <br />
                          React JS, Node JS, Express JS, MongoDB, Firebase
                          (Authentication), JWT (Authorization)
                        </h1>
                      </div>
                    </dialog>
                  </p>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Knack</h2>
                <div className="flex gap-1">
                  <a
                    href="https://knack-up.web.app/"
                    target="blank"
                    className="badge badge-outline cursor-pointer text-sky-400"
                  >
                    Live Link
                  </a>
                  <a
                    href="https://github.com/dipujafar/Knack-Up"
                    target="blank"
                    className="badge badge-outline cursor-pointer text-sky-400 ml-1"
                  >
                    Repo Link (Github)
                  </a>
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div className="card card-compact  shadow-xl">
              <figure className="bg-[url(https://i.ibb.co/x16kc96/roomPool.jpg)] bg-cover h-64">
                <div className="bg-slate-900 bg-opacity-50 p-2 w-full">
                  <h1 className="text-xl text-center">Stay Best</h1>
                  <p className="text-center">
                    Basically Stay Best is a hotel room booking web site. Where
                    users can Booked available room via internet.{" "}
                    <button
                      className="text-xl font-bold"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      See More
                    </button>
                    {/* modal */}
                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box bg-slate-700">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <a
                          target="blank"
                          href="https://stay-best-d47fc.web.app/"
                          className="font-bold text-lg mr-2"
                        >
                          Stay Best
                        </a>
                        <a
                          target="blank"
                          href="https://stay-best-d47fc.web.app/"
                          className="badge badge-primary"
                        >
                          Live
                        </a>

                        <p className="py-4 text-xl">
                          Basically Stay Best is a hotel room booking web site.
                          Where users can Booked available room via internet.
                        </p>
                        <p className="text-lg">
                          <b>Key Feature :</b>
                        </p>
                        <p className="mb-2">
                          - This Web Application has been developed for online
                          hoten room booking.
                        </p>
                        <p className="mb-2">
                          - In this web site room details page has calendar
                          where user select date and booked this room for those
                          dates.
                        </p>
                        <p className="mb-2">
                          - This website have my booking page.In this my booking
                          page show all his booking information.
                        </p>

                        <h1 className="text-lg mt-2">
                          <b>Technology : </b> <br />
                          JavaScript, React, Tailwind CSS, Node, Express,
                          MongoDB, Firebase (Authentication)
                        </h1>
                      </div>
                    </dialog>
                  </p>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Stay Best</h2>
                <div className="flex gap-1">
                  <a
                    href="https://stay-best-d47fc.web.app/"
                    target="blank"
                    className="badge badge-outline cursor-pointer text-sky-400"
                  >
                    Live Link
                  </a>
                  <a
                    href="https://github.com/dipujafar/Stay-Best"
                    target="blank"
                    className="badge badge-outline cursor-pointer text-sky-400 ml-1"
                  >
                    Repo Link (Github)
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="card card-compact  shadow-xl">
              <figure className="bg-[url(https://employees-management-2e4f8.firebaseapp.com/assets/about-ZipDhFPy.jpg)] bg-cover h-64">
                <div className="bg-slate-900 bg-opacity-50 p-2">
                  <h1 className="text-xl text-center">
                    JUIT Employee Management
                  </h1>
                  <p className="text-center">
                    This Project I made for a IT Company For managing It's
                    Employees.
                  </p>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Employee management</h2>
                <div className="flex gap-1">
                  <a
                    href="https://employees-management-2e4f8.firebaseapp.com/"
                    target="blank"
                    className="badge badge-outline cursor-pointer text-sky-400"
                  >
                    Live Link
                  </a>
                  <a
                    href="https://github.com/dipujafar/employpee-management"
                    target="blank"
                    className="badge badge-outline cursor-pointer text-sky-400"
                  >
                    Repo Link
                  </a>
                  <a
                    href="https://github.com/dipujafar/employee-management-sever"
                    target="blank"
                    className="badge badge-outline cursor-pointer text-sky-400"
                  >
                    Repo (server)
                  </a>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="card card-compact  shadow-xl">
              <figure className="bg-[url(https://i.ibb.co/FqJpwgQ/fashion1.jpg)] bg-cover h-64">
                <div className="bg-slate-900 bg-opacity-50 p-2 w-full">
                  <h1 className="text-xl text-center">Apon Fashion</h1>
                  <p className="text-center">
                    This Project I made for a e-commerce fashion shop.
                  </p>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Fashion House</h2>
                <div className="flex gap-1">
                  <a
                    href="https://apon-fashion.web.app/"
                    target="blank"
                    className="badge badge-outline cursor-pointer text-sky-400"
                  >
                    Live Link
                  </a>
                  <a
                    href="https://github.com/dipujafar/apon-fashion"
                    target="blank"
                    className="badge badge-outline cursor-pointer text-sky-400"
                  >
                    Repo Link
                  </a>
                  <a
                    href="https://github.com/dipujafar/apon-fashion-server"
                    target="blank"
                    className="badge badge-outline cursor-pointer text-sky-400"
                  >
                    Repo (Server)
                  </a>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="card card-compact  shadow-xl">
              <figure className="bg-[url(https://i.ibb.co/jb9Dq9w/04.jpg)] bg-cover h-64">
                <div className="bg-slate-900 bg-opacity-50 p-2 w-full">
                  <h1 className="text-xl text-center">Bistro Restaurant</h1>
                  <p className="text-center">
                    This Project I made for a Restaurant .
                  </p>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Bistro Restaurant</h2>
                <div className="flex gap-1">
                  <a
                    href="https://bistro-restaurant-7f5fa.firebaseapp.com"
                    target="blank"
                    className="badge badge-outline cursor-pointer text-sky-400"
                  >
                    Live Link
                  </a>
                  <a
                    href="https://github.com/dipujafar/bistro-restaurant"
                    target="blank"
                    className="badge badge-outline cursor-pointer text-sky-400"
                  >
                    Repo Link
                  </a>
                  <a
                    href="https://github.com/dipujafar/bistro-restaurant-server"
                    target="blank"
                    className="badge badge-outline cursor-pointer text-sky-400"
                  >
                    Repo (Server)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
