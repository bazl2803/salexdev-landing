import { Project } from "./project";
import { ProjectCard } from "./project-card";

export const Projects = () => {
  const projects: Array<Project> = [
    {
      name: "E-Commerce Platform",
      description:
        "A full-featured online shopping platform with real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Stripe",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      screenshot: "/modern-ecommerce-dashboard.png",
      link: "https://example.com",
    },
    {
      name: "Task Management App",
      description:
        "Collaborative task management tool with drag-and-drop functionality, team workspaces, and real-time updates for seamless productivity.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Redux"],
      screenshot: "/task-management-kanban.png",
      link: "https://example.com",
    },
    {
      name: "AI Content Generator",
      description:
        "Intelligent content creation platform powered by advanced AI models, helping users generate high-quality articles, social media posts, and marketing copy.",
      technologies: [
        "Next.js",
        "OpenAI",
        "Supabase",
        "TailwindCSS",
        "Vercel AI SDK",
      ],
      screenshot: "/ai-content-writing-interface.png",
      link: "https://example.com",
    },
  ];

  return (
    <>
      <section id="projects">
        <h3 className="p-4 text-center text-3xl font-semibold">
          Nuestra Experiencia
        </h3>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </section>
    </>
  );
};
