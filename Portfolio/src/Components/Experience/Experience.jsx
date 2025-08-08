
import { FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
// import { SiRedis } from "react-icons/si";
// import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoNodejs } from "react-icons/io5";
// import { RiNetflixFill } from "react-icons/ri";
// import { FaAmazon } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiDocker } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
           
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTailwindcss color="#00a8ba" size={50}/>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
             <TbBrandNextjs color="#ffffff" size={50}/>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            {/* <FaFigma color="#F24E1E" size={50} /> */}
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiPrisma color="#ffffff" size={50}/>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <BiLogoTypescript color="#327ac7" size={50} />
          </span>
           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiExpress color="#ffffff" size={50} />
          </span>
           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaGithub  color="#ffffff" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <IoLogoNodejs color="#85bf08" size={50}/>
          </span>
           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiDocker color="#0774b8" size={50} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
