import User from '../../assets/user.png'

const Steps = () => {
  return (
    <div className="bg-[#F9FAFC] py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Get Started in 3 Steps</h1>
          <p className="max-w-137.5 mx-auto text-[#627382] mb-4">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        {/* cards */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7'>
            <div className="card shadow-sm border border-gray-200 relative rounded-2xl">
          <div className="card-body">
            <span
              className="w-7 h-7 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full absolute top-2 right-2 capitalize flex justify-center items-center text-white"
            >
              01
            </span>
            <div className="w-14 h-14 border border-gray-200 flex justify-center items-center rounded-full">
              <img className="w-8" src={User} alt="acc" />
            </div>
            <div className="">
              <h2 className="text-2xl font-bold">Create Account</h2>
            </div>
            
            <p className="text-gray-500">Sign up for free in seconds. No credit card required to get started.</p>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
};

export default Steps;
