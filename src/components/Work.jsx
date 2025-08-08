import { assets, workData } from "../../assets/assets";
import Image from "next/image";

const Work = () => {
  const handleNavigation = (link) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20 font-ovo">
      <h4 className="text-center mb-2 text-lg font-ovo">My portfolio</h4>
      <h2 className="text-center text-4xl sm:text-5xl font-ovo">
        Projects I've developed
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Welcome to my portfolio — a curated selection of projects highlighting
        my expertise in front-end development.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
        {workData.map(({ bgImage, title, description, link }, index) => (
          <div
            key={index}
            className="w-full h-64 sm:h-72 bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group max-w-sm mx-auto"
            style={{ backgroundImage: `url("${bgImage}")` }}
            onClick={() => handleNavigation(link)}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{title}</h2>
                <p className="text-sm text-gray-700">{description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-yellow-50 transition">
                <Image src={assets.send_icon} alt="send-icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
