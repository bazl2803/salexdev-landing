import { Project } from "./project";
import { ProjectCard } from "./project-card";

export const Projects = () => {
  // Static list of Projects
  const projects: Array<Project> = [
    {
      name: "project 1",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      image: "https://res.cloudinary.com/dz0vspwuw/image/upload/v1698792548/salexdev/projects/lms_mockup_g3b7k4.png",
      link: "",
      repository: "",
      technologies: [],
    },
  ];

  return (
    <>
      <section id="projects">
        <h3 className="mb-4 text-center text-2xl font-semibold">
          Nuestra Experiencia
        </h3>

        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </>
  );
};
