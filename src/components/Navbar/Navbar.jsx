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
    <div className="shadow-sm sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="navbar max-w-7xl mx-auto">
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
          <ul className="menu menu-horizontal px-1 font-semibold">{links}</ul>
        </div>
        <div className="navbar-end flex items-center gap-5">
          <div className="relative inline-block">
            <IoCartOutline className="cursor-pointer" size={20} />
            <span className="absolute bg-red-500 rounded-full text-white w-4 h-4 flex items-center justify-center text-xs -top-2 -right-2">
              0
            </span>
          </div>
          <a
            href="/login"
            className="hover:text-gray-700 font-semibold text-[14px]"
          >
            Log in
          </a>
          <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-6 text-white hover:from-[#9514FA] hover:to-[#4F39F6] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#4F39F6]/40 active:translate-y-0 active:scale-95 hidden sm:block">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
