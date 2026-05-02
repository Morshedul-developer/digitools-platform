import BannerImage from "../../assets/banner.png";
import Circle from "../../assets/circle.png";
import Play from "../../assets/play.png";

const Banner = () => {
  return (
    <div className="hero py-15 max-w-7xl mx-auto">
      <div className="flex items-center justify-between flex-col-reverse gap-15 lg:flex-row lg:gap-0">
        
        <div className="w-1/2">
          <div class="badge badge-soft badge-primary gap-1.5 font-medium py-4 px-4 rounded-full mb-2">
            <img src={Circle} alt="" />
            New: AI-Powered Tools Available
          </div>
          <h1 className="text-7xl font-bold leading-[1.2]">
            Supercharge Your Digital Workflow
          </h1>
          <p className="py-6 text-[#627382] text-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="flex gap-4 items-center">
            <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-6 text-white hover:from-[#9514FA] hover:to-[#4F39F6] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#4F39F6]/40 active:translate-y-0 active:scale-95">
              Explore Products
            </button>
            <div className="rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-[1.5px] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#4F39F6]/40 transition-all duration-300 active:translate-y-0 active:scale-95">
              <button className="btn rounded-full bg-white px-6 text-white flex items-center gap-2 ">
                <img className="max-w-[15%]" src={Play} alt="" /> <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold">Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
        <div>
            <img src={BannerImage} className="max-w-110 rounded-lg shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
