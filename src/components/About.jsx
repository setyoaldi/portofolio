import "animate.css";
const About = () => {
  return (
    <div name="about" className="h-screen w-full bg-[#0a192f] text-gray-300 ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] grid sm:grid-cols-2 gap-8 w-full">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl inline font-bold border-b-4 border-blue-500 animate__animated animate__fadeInDown">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] grid sm:grid-cols-2 gap-8 w-full">
          <div className="sm:text-right pb-6 pl-4">
            <p className="text-4xl inline font-bold">
              Frontend Developer that focused on React and Typescript
            </p>
          </div>
          <div className="px-3 text-justify">
            <p>
              Graduated as a Front-End Web Developer at Alterra Academy and
              adept front-end developer focusing on React JavaScript or
              Typescript. I also have experience in creating UI/UX designs using
              Figma, ,implementing the design using Tailwind CSS in ReactJS, and
              integrating Restful API. Also have analytical thinking and
              creative problem-solving skills. Currently, i dedicated to
              learning and growing in front-end field and have interest in
              learning about css styling. And always seeking for opportunities
              to level up my design and coding skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
