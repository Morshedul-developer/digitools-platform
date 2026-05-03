import User from "../../assets/user.png";
import Package from "../../assets/package.png";
import Rocket from "../../assets/rocket.png";

const Steps = () => {
  return (
    <div className="bg-[#F9FAFC] py-24 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Get Started in 3 Steps</h1>
          <p className="max-w-137.5 mx-auto text-[#627382] mb-7">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        {/* cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          <div className="card shadow-sm border border-gray-200 relative rounded-2xl py-10">
            <div className="card-body text-center">
              <span className="w-7 h-7 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full absolute top-3 right-3 capitalize flex justify-center items-center text-white">
                01
              </span>
              <div className="w-20 h-20 border border-gray-200 flex justify-center items-center rounded-full mx-auto bg-[#9514FA]/10">
                <img className="w-8" src={User} alt="acc" />
              </div>
              <div className="">
                <h2 className="text-2xl font-bold">Create Account</h2>
              </div>

              <p className="text-gray-500">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
          <div className="card shadow-sm border border-gray-200 relative rounded-2xl py-10">
            <div className="card-body text-center">
              <span className="w-7 h-7 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full absolute top-3 right-3 capitalize flex justify-center items-center text-white">
                02
              </span>
              <div className="w-20 h-20 border border-gray-200 flex justify-center items-center rounded-full mx-auto bg-[#9514FA]/10">
                <img className="w-8" src={Package} alt="acc" />
              </div>
              <div className="">
                <h2 className="text-2xl font-bold">Choose Products</h2>
              </div>

              <p className="text-gray-500">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>
          <div className="card shadow-sm border border-gray-200 relative rounded-2xl py-10">
            <div className="card-body text-center">
              <span className="w-7 h-7 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full absolute top-3 right-3 capitalize flex justify-center items-center text-white">
                03
              </span>
              <div className="w-20 h-20 border border-gray-200 flex justify-center items-center rounded-full mx-auto bg-[#9514FA]/10">
                <img className="w-8" src={Rocket} alt="acc" />
              </div>
              <div className="">
                <h2 className="text-2xl font-bold">Start Creating</h2>
              </div>

              <p className="text-gray-500">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
