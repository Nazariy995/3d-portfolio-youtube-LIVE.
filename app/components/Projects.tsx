import Project from "./Project";

const Projects = () => {
  return (
    <div className="mt-28 ml-20">
      <h1 className="text-7xl">Projects</h1>
      <div className="mt-10 projects-container flex overflow-scroll gap-[30px]">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default Projects;
