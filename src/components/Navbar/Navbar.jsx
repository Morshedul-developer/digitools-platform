import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const links = (
    <>
      <li>
        <a>Products</a>
      </li>
      <li>
        <a>Features</a>
      </li>
      <li>
        <a>Pricing</a>
      </li>
      <li>
        <a>Testimonials</a>
      </li>
      <li>
        <a>FAQ</a>
      </li>
    </>
  );

  return (
    <div className="shadow-sm">
      <div className="navbar bg-base-100 max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
            >
              {links}
            </ul>
          </div>
          <a className="text-2xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent cursor-pointer">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="relative inline-block">
            <IoCartOutline size={24}/>
            <span className="absolute bg-red-500 rounded-full text-white w-4.5 h-4.5 flex items-center justify-center text-xs -top-2 -right-2">
              0
            </span>
          </div>
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
