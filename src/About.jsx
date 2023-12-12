

const About = () => {
    return (
        <div className="bg-gray-700 text-white">
            <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl uppercase text-center pt-5 font-medium">About <span className="text-sky-400">Me</span></h1>
            <div>
                <div>
                    <h1 className="text-2xl uppercase font-medium p-2 md:p-0">Personal Info</h1>
                    <div className="mt-3 flex flex-col md:flex-row p-2 md:p-0 md:gap-16 gap-2">
                        <div className="space-y-1">
                        <h3 className="text-xl">Name : <span className="font-medium">Jafar Uddin Dipu</span></h3>
                        <h3 className="text-xl">Age : <span className="font-medium"> 22 Years</span></h3>
                        <h3 className="text-xl">Nationality : <span className="font-medium"> Bangladeshi</span></h3>
                        </div>
                        <div className="space-y-1">
                        <h3 className="text-xl">Address : <span className="font-medium">Feni, Bangladesh</span></h3>
                        <h3 className="text-xl">Phone : <span className="font-medium">01857176432</span></h3>
                        <h3 className="text-xl">Email : <span className="font-medium">dipujafarmr@gamil.com</span></h3>
                        <h3 className="text-xl">Language : <span className="font-medium">Bangla, English</span></h3>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;