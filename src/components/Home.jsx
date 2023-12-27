import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { TypeWriter } from "./TypeWriter";
import "animate.css";

const Hero = () => {
  const talkAbout = [
    "React",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "Redux",
    "Figma",
    "RESTful APIs",
    "HTML",
    "CSS",
    "Git",
    "MySQL",
    "MongoDB",
  ];
  return (
    <div name="home" className="Hero w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-blue-200">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Achmad Setyo Aldi
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] animate__animated animate__slideInDown">
          I&apos;m a Frontend Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Focusing on React and Typescript, but we can discuss about{" "}
          <TypeWriter strings={talkAbout} /> together.
        </p>
        <div>
          <button className="text-white group w-[120px] text-center justify-evenly py-1 border-2 border-blue-500 hover:bg-blue-400 flex items-center  ease-in duration-300 origin-bottom">
            <Link to={"work"} duration={500} smooth={true}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 group-hover:text-black duration-300">
              <HiArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
