import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#101727] pt-25 pb-10">
      <div className="footer sm:footer-horizontal  text-white max-w-7xl mx-auto mb-15">
        <nav>
          <h4 className="text-3xl font-bold">DigiTools</h4>
          <p className="max-w-75 leading-6 text-gray-400">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </nav>
        <nav className="text-gray-400">
          <h6 className="text-[16px] font-semibold text-white">Product</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Templates</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav className="text-gray-400">
          <h6 className="text-[16px] font-semibold text-white">Company</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
        </nav>
        <nav className="text-gray-400">
          <h6 className="text-[16px] font-semibold text-white">Resources</h6>
          <a className="link link-hover">Documentation</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Community</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="text-[16px] font-semibold text-white">Social</h6>
          <div className="flex gap-5">
            <a className="w-10 h-10 bg-white rounded-full flex justify-center items-center" href="">
              <AiFillInstagram className="text-black text-xl" />
            </a>
            <a className="w-10 h-10 bg-white rounded-full flex justify-center items-center" href="">
              <FaSquareFacebook className="text-black text-xl" />
            </a>
            <a className="w-10 h-10 bg-white rounded-full flex justify-center items-center" href="">
              <FaXTwitter className="text-black text-xl" />
            </a>
          </div>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="divider before:h-px after:h-px before:bg-gray-500 after:bg-gray-500 mb-7"></div>
        <div className="text-gray-500 flex  flex-wrap gap-5 justify-between">
          <p>© 2026 DigiTools. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="link-hover" href="">Privacy Policy</a>
            <a className="link-hover" href="">Terms of Service</a>
            <a className="link-hover" href="">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
