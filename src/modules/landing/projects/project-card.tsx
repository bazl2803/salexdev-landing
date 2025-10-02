import Image from "next/image";
import { Project } from "./project";

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <>
      <div>
        <Image
          className="h-40 w-auto"
          src={project.image}
          alt={project.name}
          width={1}
          height={1}
        />
        <h6>{project.name}</h6>
        <p>{project.description}</p>
      </div>
    </>
  );
};
