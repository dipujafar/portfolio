const Projects = () => {
  return (
    <div id="project" className="bg-gray-700 text-white">
      <div className="max-w-7xl mx-auto py-16">
        <h1 className="text-4xl text-center uppercase font-medium">
          Latest <span className="text-sky-400">Projects</span>{" "}
        </h1>

        <div className="grid lg:grid-cols-3 gap-3 mt-4 ">
          {/* Project 1 */}
          <div className="card shadow-xl">
            <figure className='bg-[url(https://employees-management-2e4f8.firebaseapp.com/assets/about-ZipDhFPy.jpg)] bg-cover h-64'>
             <div className="bg-slate-900 bg-opacity-50 p-2">
              <h1 className="text-xl text-center">JUIT Employee Management</h1>
              <p className="text-center">This Project I made for a IT Company For managing It's Employees.</p>
             </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">
               Employee management
              </h2>
              <div className="flex gap-1">
                <a href="https://employees-management-2e4f8.firebaseapp.com/" target="blank" className="badge badge-outline cursor-pointer text-sky-400">Live Link</a>
                <a href="https://github.com/dipujafar/employpee-management" target="blank" className="badge badge-outline cursor-pointer text-sky-400">Repo Link</a>
                <a href="https://github.com/dipujafar/employee-management-sever" target="blank" className="badge badge-outline cursor-pointer text-sky-400">Repo Link(Server Side) </a>
                
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="card shadow-xl">
            <figure className='bg-[url(https://i.ibb.co/FqJpwgQ/fashion1.jpg)] bg-cover h-64'>
             <div className="bg-slate-900 bg-opacity-50 p-2">
              <h1 className="text-xl text-center">Apon Fashion</h1>
              <p className="text-center">This Project I made for a e-commerce fashion shop.</p>
             </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">
               Employee management
              </h2>
              <div className="flex gap-1">
                <a href="https://apon-fashion.web.app/" target="blank" className="badge badge-outline cursor-pointer text-sky-400">Live Link</a>
                <a href="https://github.com/dipujafar/apon-fashion" target="blank" className="badge badge-outline cursor-pointer text-sky-400">Repo Link</a>
                <a href="https://github.com/dipujafar/apon-fashion-server" target="blank" className="badge badge-outline cursor-pointer text-sky-400">Repo Link(Server Side) </a>
                
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div className="card shadow-xl">
            <figure className='bg-[url(https://i.ibb.co/jb9Dq9w/04.jpg)] bg-cover h-64'>
             <div className="bg-slate-900 bg-opacity-50 p-2">
              <h1 className="text-xl text-center">Britro Restaurant</h1>
              <p className="text-center">This Project I made for a Restaurant .</p>
             </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">
               Employee management
              </h2>
              <div className="flex gap-1">
                <a href="https://bistro-restaurant-7f5fa.firebaseapp.com" target="blank" className="badge badge-outline cursor-pointer text-sky-400">Live Link</a>
                <a href="https://github.com/dipujafar/bistro-restaurant" target="blank" className="badge badge-outline cursor-pointer text-sky-400">Repo Link</a>
                <a href="https://github.com/dipujafar/bistro-restaurant-server" target="blank" className="badge badge-outline cursor-pointer text-sky-400">Repo Link(Server Side) </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
