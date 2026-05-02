const PricingCard = ({ pricing }) => {
  const { name, shortDes, price, period, features, buttonText, tagName } = pricing;
  return (
    <div className="card shadow-sm border border-gray-200 relative rounded-2xl">
      <div className="card-body">
        {
            tagName === "Most Popular" && <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge badge-md rounded-full font-semibold bg-[#FEF3C6] text-[#BB4D00] whitespace-nowrap">Most Popular</span>
        }
        <div className="">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-[#627382] mb-3">{shortDes}</p>
          <span className="text-3xl font-bold">
            ${price}<span className="text-[16px] font-normal text-[#627382]">/{period}</span>
          </span>
        </div>
        <ul className="mt-3 flex flex-col gap-2 text-xs mb-2">
          {features.map((feature, index) => (
            <li className="text-[#627382]" key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <button className="w-full btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-6 text-white hover:from-[#9514FA] hover:to-[#4F39F6] border-none font-bold">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
