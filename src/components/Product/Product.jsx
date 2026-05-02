import I1 from "../../assets/products/i-1.png";
import I2 from "../../assets/products/i-2.png";
import I3 from "../../assets/products/i-3.png";
import I4 from "../../assets/products/i-4.png";
import I5 from "../../assets/products/i-5.png";
import I6 from "../../assets/products/i-6.png";
import I7 from "../../assets/products/i-7.png";
import I8 from "../../assets/products/i-8.png";
import I9 from "../../assets/products/i-9.png";

const images = [I1, I2, I3, I4, I5, I6, I7, I8, I9];

const Product = ({ product }) => {
  const { id, name, description, price, period, tag, tagType, features } =
    product;

  return (
    <div className="card shadow-sm border border-gray-200 relative rounded-2xl">
      <div className="card-body">
        <span className={`badge badge-md font-medium rounded-full ${tagType === "best-seller" ? "bg-[#FEF3C6] text-[#BB4D00]" : tagType === "popular" ? "badge-soft badge-primary" : "bg-[#DBFCE7] text-green-600"} absolute top-2 right-2 capitalize`}>
          {tag}
        </span>
        <div className="w-14 h-14 border border-gray-200 flex justify-center items-center rounded-full">
          <img className="w-8" src={images[id - 1]} alt={name} />
        </div>
        <div className="">
          <h2 className="text-2xl font-bold">{name}</h2>
        </div>
        <p className="text-xl font-bold">
          ${price}
          <span className="text-[14px] text-gray-500 capitalize font-normal">
            /{period}
          </span>
        </p>
        <p className="text-gray-500">{description}</p>
        <ul className="mt-3 flex flex-col gap-2 text-xs">
          {features.map((feature) => (
            <li>
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
              <span className="text-gray-500 font-medium text-[15px]">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <button className="w-full btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-6 text-white hover:from-[#9514FA] hover:to-[#4F39F6] border-none font-bold">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
