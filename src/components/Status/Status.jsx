const Status = () => {
  return (
    <div className="stats py-10 shadow w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-none text-white text-center">
      <div className="stat place-items-center border-r-2 border-gray-300">
        <div className="stat-value">50K+</div>
        <div className="font-medium">Active Users</div>
      </div>

      <div className="stat place-items-center border-r-2 border-gray-300">
        <div className="stat-value">200+</div>
        <div className="font-medium">Premium Tools</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-value">4.9</div>
        <div className="font-medium">Rating</div>
      </div>
    </div>
  );
};

export default Status;
