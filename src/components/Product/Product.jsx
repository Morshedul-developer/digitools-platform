import { useState } from "react";
import { HiOutlineCheck } from "react-icons/hi";

const Product = ({ product, cards, setCards }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);

    const findCards = cards.find((c) => c.id === product.id);
    if (findCards) {
      return;
    }
    const newCards = [...cards, product];
    setCards(newCards);
  };

  const { name, description, price, period, tag, tagType, features, icon } =
    product;

  return (
    <div className="card shadow-sm border border-gray-200 relative rounded-2xl hover:-translate-y-2 transition-all duration-300 hover:border-gray-300">
      <div className="card-body">
        <span
          className={`badge badge-md font-medium rounded-full ${tagType === "best-seller" ? "bg-[#FEF3C6] text-[#BB4D00]" : tagType === "popular" ? "badge-soft badge-primary" : "bg-[#DBFCE7] text-green-600"} absolute top-2 right-2 capitalize`}
        >
          {tag}
        </span>
        <div className="w-14 h-14 border border-gray-200 flex justify-center items-center rounded-full">
          <img className="w-8" src={icon} alt={name} />
        </div>
        <h2 className="text-2xl font-bold">{name}</h2>

        <p className="text-xl font-bold">
          ${price}
          <span className="text-[14px] text-gray-500 capitalize font-normal">
            /{period}
          </span>
        </p>
        <p className="text-gray-500">{description}</p>
        <ul className="mt-2 flex flex-col gap-2 text-xs">
          {features.map((feature, index) => (
            <li key={index}>
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
              <span className="text-gray-500 font-medium text-[15px]">
                {feature}
              </span>
            </li>
          ))}
        </ul>
        <button
          onClick={handleClick}
          className={`w-full btn rounded-full ${click ? "bg-green-600 text-white" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:from-[#9514FA] hover:to-[#4F39F6]"} border-none font-bold mt-3`}
        >
          {click ? (
            <span className="flex items-center gap-2">
              <HiOutlineCheck className="text-xl " />
              Added to Cart
            </span>
          ) : (
            "Buy Now"
          )}
        </button>
      </div>
    </div>
  );
};

export default Product;
