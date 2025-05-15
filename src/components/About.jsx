import OurTeam from "./OurTeam";
import { Manifesto, Content, Content2 } from "./Manifesto";
import StaggeredList from "../design/StaggeredList";

const About = () => {
  return (
    <section id="about" className="py-8 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-4 lg:grid-cols-4">
          <div className="col-span-2 md:col-span-4">
            <Manifesto />
            <Content />
            <StaggeredList />
            <Content2 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;