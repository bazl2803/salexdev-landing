import React from "react";
import { TechnologyCard } from "./technology-card";

export const Technologies = () => {
  const technologies: Array<{
    logo: string;
    name: string;
    description: string;
  }> = [
    {
      name: "AWS",
      logo: "/logos/aws.png",
      description: "Popular Servicio de Computación en la Nube",
    },
    {
      name: "Nest.js",
      logo: "/logos/nestjs.png",
      description: "Robusto Framework para desarrollo backend en Node.js",
    },
    {
      name: "React.js",
      logo: "/logos/react.png",
      description:
        "La librería más popular de JavaScript para desarrollo frontend",
    },
    {
      name: "Next.js",
      logo: "/logos/nextjs.png",
      description:
        "Potente Framework para React.js con grandes optimizaciones y mejoras",
    },
    {
      name: "Spring Boot",
      logo: "/logos/spring-boot.png",
      description: "Framework para desarrollo backend en Java",
    },
    {
      name: "PostgresSQL",
      logo: "/logos/postgresql.png",
      description: "Base de datos relacional de código abierto",
    },
  ];

  return (
    <section>
      <h3 className="mb-4 text-3xl font-bold">Nuestras Herramientas</h3>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
        {technologies.map((technology) => (
          <TechnologyCard key={technology.name} {...technology} />
        ))}
      </div>
    </section>
  );
};
